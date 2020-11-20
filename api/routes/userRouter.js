// import express and the router method
const express = require('express');
const router = express.Router();


// import User mongoose model (schema?)
const User = require('../models/User'); 
// to use in the 'entries'??
const Entry = require('../models/Entry');

// retreive this info asyncronously
router.get('/', async (req, res) => {
    // save in a variable, the User schema, or multiples?
    // when is it a single user model and when is it the full body?
    const users = await User.find();
    res.json(users);
})

// to add a new user to the model???
router.post('/', async (req, res) => {
    // conditional necessary to check for authentication?    
    let user = new User({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            entries: req.body.entries,
        })
    // aka, 'const user =' but it's a document
    const doc = await user.save();
    // return it as json
    res.json(doc);
})


module.exports = router;

