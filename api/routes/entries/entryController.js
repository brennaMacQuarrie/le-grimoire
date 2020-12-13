const mongoose = require('mongoose');
const Entries = require('./Entry');


exports.getEntriesByUser = async (userId) => {
    try {
        const entries = await Entries
            .find({ author: userId })
            .populate({ path: 'author', select: 'name' });
        return entries;
    } catch(err) {
        throw err;
    }
};

exports.createEntry = async (data) => {
    try {
        const newEntry = new Entries(data);
        const entry = await newEntry.save();
        return entry.id;
    } catch (err) {
        throw err;
    }
};

exports.getEntryById = async (id) => {
    try {
        const entry = await Entries 
            .findById(id)
            .populate({ path: 'author', select: 'name' });
        return entry;
    } catch(err) {
        throw err;
    }
}

exports.updateEntryById = async (entry) => {
    try {
        const e = await Entries.findOne({
            user: entry.user,
            _id: entry.id,
        });
        e.text = entry.text;
        const savedEntry = await e.save();
        return savedEntry;
    } catch(err) {
        throw err;
    }
}

exports.deleteEntry = async (id, userId) => {
    try {
        const entry = await Entries.deleteOne({ _id: mongoose.Types.ObjectId(id) });
        console.log(entry);
        const entries = await exports.getEntriesByUser(userId);
        return entries;
    } catch(err) {
        console.log(err);
    }
}