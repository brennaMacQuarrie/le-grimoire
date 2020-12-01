// import express and the router method
const express = require('express');
const { createUser, findUserByEmail, findUserById } = require('./userController');
const { createToken } = require('../../tokens/tokenService');
const { verifyToken } = require('../../middleware/verifyToken');
const router = express.Router();

// import User mongoose model (schema?)
const User = require('./User'); 
// to use in the 'entries'??
const Entry = require('../entries/Entry');



router.route('/')
.post(async (req, res) => {
    const { name, email, password, entries } = req.body;
    if (!name || name === ' ') {
        res.status(400).json({ message: 'name must be provided' });
        return;
    }
    if (!email || email === ' ') {
        res.status(400).json({ message: 'email must be provided' });
        return;
    }
    if (!password || password === ' ') {
        res.status(400).json({ message: 'password must be provided' });
        return;
    }

    try {
        const foundUser = await findUserByEmail(email);
        if (foundUser) {
            res.status(400),json({ message: `email ${email} already exists` });
            return;
        }

        const user = await createUser({ name, email, password, entries });
        res.json({ data: user._id });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
});


router.route('/login')
.post(async (req, res) => {
    const { email, password } = req.body;
    if (!email || email === ' ') {
        res.status(400).json({ message: 'email must be provided' });
        return;
    }
    if (!password || password === ' ') {
        res.status(400).json({ message: 'password must be provided' });
        return;
    }

    try {
        //  user exists??
        const user = await findUserByEmail(email);
        if (!user) {
            res.status(400).json({ message: 'password and email do not match' });
            return;
        }

        // passwords match?
        const isMatch = await user.comparePasswords(password);
        if (!isMatch) {
            res.status(400).json({ message: 'password and email do not match' });
            return;
        }

        // go ahead
        const token = createToken({ id: user._id });
        // save token in cookie
        res.cookie('token', token);
        res.status(200).send({});
    } catch(ex) {
        console.log(ex);
        res.status(500).json({ message: 'internal server error' });
    }
})


router.use(verifyToken).route('/me')
.get(async (req, res) => {
    try {
        const user = await findUserById(req.user.id);
        res.json({ data: user });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
});
 
// retreive this info asyncronously
router.get('/', async (req, res) => {
    // save in a variable, the User schema, or multiples?
    // when is it a single user model and when is it the full body?
    const users = await User.find();
    res.json(users);
})




module.exports = router;

