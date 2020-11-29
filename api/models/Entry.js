// import the stuff
const mongoose = require('mongoose');
const { Schema } = mongoose;

// build the unique data format
const entrySchema = new Schema({
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    category: String, // from page name
    title: String, // from title text
    textEntry: String,
    bookmarked: Boolean,  
});

// exporting mongoose model
const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;