const express = require('express');
const { verifyToken } = require('../../middleware/verifyToken');
const { getEntriesByUser, getEntryById, createEntry, updateEntryById } = require('./entryController');
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





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> OLD CODE

// router.get('/', async (req, res) => {
//     // go get this from the entryRouter??? where is it coming from?
//     const entries = await Entry.find();
//     res.json(entries);
// });

// // add a new entry
// router.post('/', async (req, res) => {
//     // destructuring
//     const { title, publishedDate, category, textEntry, bookmarked } = req.body;

//     const newEntry = new Entry({
//         title: title,
//         publishedDate: publishedDate,
//         category: category,
//         textEntry: textEntry,
//         bookmarked: bookmarked
//     })
//     const entry = await newEntry.save();

//     res.status(201).json({
//         data: entry,
//         error: null,
//     })   
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




module.exports = router;