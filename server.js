const express = require('express');

// importing my routes... 
const entryRouter = require('./api/routes//entries/entryRouter');
const userRouter = require('./api/routes/users/userRouter');
const app = express();
const mongoose = require('mongoose');

// TODO update on deploy to no longer be local
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/legrimoire";
const PORT = process.env.PORT || "8080";


const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cookieParser());

app.use('/entries', entryRouter);
app.use('/users', userRouter);


// server.js at the very end of the file.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build/'));
    // only if you are using React Router
    app.get('*', (req, res) => {
        console.log(path.join(__dirname + '/build/index.html'));
        res.sendFile(path.join(__dirname + '/build/index.html'));
    });
}

mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
