const express = require('express');
const router = express.Router();

// what will this be?
const entries = require('./entries');

router.get('/', (req, res) => {
    res.json(entries);
})

module.exports = router;