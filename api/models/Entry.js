// import the stuff
const mongoose = require('mongoose');
const { Schema } = mongoose;

// build the unique data format
const entrySchema = new Schema({
    // user: user._id, // do i need this?
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    category: String, // from page name
    title: String, // from title text
    text: String,
    bookmarked: Boolean,  
    // image: String >>>> stretch goal
});

// exporting mongoose model
const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;