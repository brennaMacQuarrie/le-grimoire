const express = require('express');
const router = express.Router();

const { getEntriesByUser, getEntryById, createEntry, updateEntryById } = require('./entryController');
const { verifyToken } = require('../../middleware/verifyToken');


const Entry = require('./Entry');

router.use(verifyToken);

router.route('/')
.get(async (req, res) => {
    const { user } = req;
    try {
        const entries = await getEntriesByUser(user.id);
        res.json({ data: entries });
    } catch(ex) {
        console.log(ex);
        res.status(500).json({ message: 'internal server error' });
    }
})


router.route('/:id')
.post(async (req, res) => {
    try {
        const { body } = req;
        if (!body.text || body.text === ' ') {
            res.status(400).json({ message: 'text must be provided' })
        }
        const newEntry = {
            title,
            publishedDate,
            category,
            bookmarked
        }
        res.json({ data: newEntry }); // ???
    } catch(ex) {
        console.log(ex);
        res.status(500).json({ message: 'internal server error' });
    }
})
.put(async (req, res) => {
    try {
        const { body, params, user } = req;
        if (!body.text || body.text === ' ') {
            res.status(400).json({ message: 'text must be provided' });
        }
        const newEntry = await updateEntryById({})
    } catch(ex) {
        console.log(ex);
        res.status(500).json({ message: 'internal server error' });
    }
})





// >>>>>>>>>>>>>>>>>>>>>>?>>>>>>>>>>>>>>> OLD CODE

router.get('/', async (req, res) => {
    // go get this from the entryRouter??? where is it coming from?
    const entries = await Entry.find();
    res.json(entries);
});

// add a new entry
router.post('/', async (req, res) => {
    // destructuring
    const { title, publishedDate, category, textEntry, bookmarked } = req.body;

    const newEntry = new Entry({
        title: title,
        publishedDate: publishedDate,
        category: category,
        textEntry: textEntry,
        bookmarked: bookmarked
    })
    const entry = await newEntry.save();

    res.status(201).json({
        data: entry,
        error: null,
    })   
})



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
module.exports = router;