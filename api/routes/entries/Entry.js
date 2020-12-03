// import the stuff
const mongoose = require('mongoose');
const { Schema } = mongoose;

// build the unique data format
const entrySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    title: String, // from title text
    publishedDate: {
        type: Date,
        default: Date.now(),
    },
    category: String, // from page name
    textEntry: {
        type: String,
        required: true
    },
});

// exporting mongoose model
const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;