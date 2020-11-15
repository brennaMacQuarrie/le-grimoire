const express = require('express');
const bodyParser = require('body-parser');

const entryRoutes = require('./routes/entryRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/entries', entryRoutes);
app.use('/users', userRoutes);

app.listen(4000, () => {
    console.log('yer gosh dern app is running on 4k');
})