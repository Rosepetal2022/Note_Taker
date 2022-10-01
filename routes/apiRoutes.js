const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { v4:uuidv4 } = require('uuid');
const notes  = require('../db/db.json');
const { url } = require('inspector');


router.get('/notes', (req, res) => {
    res.json(notes);

});

router.post('/notes', ({ body }, res) => {
    body.id = uuidv4();
    notes.push(body)
    fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
        if (err) throw err;
        res.json(notes)
    });
});

router.delete("/notes/:id", (req, res) => {
    console.log(req.params.id)
    let noteId = req.params.id;
    let j = 0;
    notes.forEach(note => {
        j = j + 1;
        if(note.id == noteId) {
            notes.splice((j - 1), 1)
        }
    });
    console.log(notes)
    fs.writeFileSync(
        path.join( __dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(true);
})

module.exports = router;