const express = require('express');
const router = express.Router();

const Entry = require('./Entry');

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

module.exports = router;