const express = require('express');
const { verifyToken } = require('../../middleware/verifyToken');
const { getEntriesByUser, getEntryById, createEntry, updateEntryById, deleteEntry } = require('./entryController');
const router = express.Router();

router.use(verifyToken);

const Entry = require('./Entry');




router.route('/')
.get(async (req, res) => {
    const { user } = req;
    try {
        const entries = await getEntriesByUser(user.id);
        res.json({ data: entries });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
})
.post(async (req, res) => {
    try {
        const { body } = req;
        if (!body.text || body.text ===' ') {
            res.status(400).json({ message: 'text must be provided' });
            return;
        }
        const newEntry = {
            text: body.text,
            author: req.user.id,
            title: body.title,
            category: body.category
        }
        const id = await createEntry(newEntry)
        res.json({ data: { id } });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
});



router.route('/delete')
    .post(async (req, res) => {
        console.log(req.body, 'WHATSUP');

        try {
            const entries = await deleteEntry(req.body.id, req.user.id);
            res.json({data: entries});
        } catch (err) {
            console.log(err);
        }
    });




router.route('/:id')
.get(async (req, res) => {
    try {
        const { params } = req;
        const note = await getEntryById(params.id); 
        res.json({ data: note });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
})

.post(async (req, res) => {
    try {
        const { body } = req;
        if (!body.text || body.text === ' ') {
            res.status(400).json({ message: 'text must be provided' })
        }
        const newEntry = {
            title,
            publishedDate,
            category,
            bookmarked
        }
        res.json({ data: newEntry }); // ???
    } catch(ex) {
        console.log(ex);
        res.status(500).json({ message: 'internal server error' });
    }
})
.put(async (req, res) => {
    try {
        const { body, params, user } = req;
        if (!body.text || body.text === ' ') {
            res.status(400).json({ message: 'text must be provided' });
        }
        const newEntry = await updateEntryById({
            text: body.text,
            id: params.id,
            user: req.user.id
        });

        res.json({ data: newEntry });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
    }
})





module.exports = router;