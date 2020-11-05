const express = require('express');

const app = express();

app.get('/tarot', (req, res) => {
    console.log(req.query);
    res.send('tarot stuffffff'); // res.json
})

app.listen(3000, () => {
    console.log('running');
})