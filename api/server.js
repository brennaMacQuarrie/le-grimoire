const express = require('express');

const app = express();

// app.get('/tarot', (req, res) => {
//     console.log(req.query);
//     res.send('tarot stuffffff'); // res.json
// })

app.listen(4000, () => {
    console.log('yer gosh dern app is running on 4k');
})