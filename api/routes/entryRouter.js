const express = require('express');
const router = express.Router();

const Entry = require('../models/Entry');

router.get('/', async (req, res) => {
    // go get this from the entryRouter??? where is it coming from?
    const entries = await Entry.find();
    res.json(entries);
});

// add a new entry
router.post('/', async (req, res) => {
    console.log(req.body);
    // destructuring
    const { title, publishedDate, category, text, bookmarked } = req.body;

    const newEntry = new Entry({
        title: title,
        publishedDate: publishedDate,
        category: category,
        text: text,
        bookmarked: bookmarked
    })

    const entry = await newEntry.save();
    res.json(entry);
   
})

module.exports = router;