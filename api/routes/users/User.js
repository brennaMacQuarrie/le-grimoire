const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// const entrySchema = require('../models/Entry');
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
        required: true,
        unique: true
    },
    entries: [{
        type: Schema.Types.ObjectId,
        ref: 'Entry', // find the entries associated with the user
    }]
});


userSchema.pre('save', async function(next) {
    const user = this;

    try {
        if (user.isModified('password') || user.isNew) {
            const encryptedPassword = await bcrypt.hash(user.password, 12);
            user.password = encryptedPassword;
        }
        next();
    } catch(ex) {
        next(ex);
    }
});

userSchema.methods.comparePasswords = function(password) {
    const user = this;
    return bcrypt.compare(password, user.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;

// look up jwt tokens?