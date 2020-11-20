const mongoose = require('mongoose');
const { Schema } = mongoose;

const entrySchema = require('../models/Entry');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    entries: [entrySchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// look up jwt tokens?