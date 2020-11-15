const express = require('express');
const router = express.Router();

const uuid = require('uuid');

// WHAT WILL THIS BE?
const entries = require('/entries'); 
const users = [];


router.post('/', (req, res) => {
    const userId = uuid.v4();
    const { entryId } = req.body;

    const entriesToAdd = entries.filter((entry) => 
        entryId === entry.id
    ).map((entry) => {
        return { ...entry, count: 1 }
    })

    const user = {
        id: userId,
        entries: entriesToAdd,
    };

    users.push(user);
    res.json(user);
})



router.patch('/:userId', (req, res) => {
    if (!req.params.userId) {
        res.status(400).json({message: 'dude there is def no userId'})
    }

    const newEntryId = req.body.entryId;

    const userToEditIndex = users.findIndex(
        (user) => user.id === req.params.userId
    );

    if (userToEditIndex === -1) {
        res.status(404).json({ message: 'invalidddd userId' });
    }

    const userToEdit = users[userToEditIndex];
    let newEntries = [];

    const alreadyEntered = userToEdit.entries.filter((p) => p.id === newEntryId).length !== 0;

    if (alreadyEntered) {
        newEntries = userToEdit.entries.map((entry) => {
            if (entry.id === newEntryId) {
                return { ...entry, count: entry.count + 1 }
            }
            return entry;
        })
    } else {
        const newEntry = entries.find((entry) => 
        entry.id === newEntryId);
        userToEdit.entries.push({ ...newEntry, count: 1 });
        newEntries = userToEdit.entries;
    }

    users[userToEditIndex].entries = newEntries;

    res.json(users[userToEditIndex]);
});

module.exports = router;

