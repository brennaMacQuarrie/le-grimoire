// import the stuff
const mongoose = require('mongoose');
const { Schema } = mongoose;

// build the unique data format
const entrySchema = new Schema({
    title: String,
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    category: String,
    text: String,
    bookmarked: Boolean,
    // image: String >>>> stretch goal
});

// exporting mongoose model
const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;