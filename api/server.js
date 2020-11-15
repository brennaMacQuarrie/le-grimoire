const express = require('express');

const entryRouter = require('./routes/entryRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// bring in mongoose!
const mongoose = require('mongoose');
// TODO update on deploy to no longer be local
const uri = "mongodb://localhost:27017/legrimoire";
const PORT = 5000;

// Connect to database
mongoose
    // connect returns a promise so we can "then" it
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Successfully connected to: ${uri} `);
    })
    .catch(err => {
        console.log(err.message);
    })

app.use(bodyParser.json());

app.use('/entries', entryRouter);
app.use('/users', userRouter);

app.listen(4000, () => {
    console.log('yer gosh dern app is running on 4k');
})