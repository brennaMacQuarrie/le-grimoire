const express = require('express');
const Entry = require('../models/Entry');
const router = express.Router();

// what will this be?
const Entry = require('../models/Entry');

router.get('/', async (req, res) => {
    const entries = await Entry.find();
    res.json(entries);
});

router.post('/', async (req, res) => {
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