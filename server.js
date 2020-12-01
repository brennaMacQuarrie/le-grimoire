const express = require('express');

// importing my routes... 
const entryRouter = require('./api/routes//entries/entryRouter');
const userRouter = require('./api/routes/users/userRouter');

const app = express();

// bring in mongoose
const mongoose = require('mongoose');
// TODO update on deploy to no longer be local
// database
const uri = "mongodb://localhost:27017/legrimoire";

// Connect to database
mongoose
    // .connect returns a promise so we can "then" it
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Successfully connected to: ${uri} `);
    })
    .catch(err => {
        console.log(err.message);
})

app.use(express.json());

// does this say >> /entries is where to get info for entryRouter?
app.use('/entries', entryRouter);
app.use('/users', userRouter);


// express
// frontend
const PORT = 5000;

app.listen(PORT, () => {
    console.log('app is running on 5k');
})