const express = require('express');
const app = express();



const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  const datajson = require('./data.json');
  const notes = datajson.notes
  for (const id in notes) {
    notesArr.push(notes[id]);
  }
  res.status(200).json(notesArr);
})

app.get('/api/notes/:id', (req, res) => {
  const datajson = require('./data.json');
  const noteId = req.params.id
  const notes = datajson.notes
  const note = notes[noteId];
  if (`${parseInt(noteId)}` === 'NaN' || parseInt(noteId) < 1) {
    const err = {
      'error': 'id must be a positive integer'
    }
    res.status(400).json(err);
  }
  if (note === undefined) {
    const errTwo = {
      'error': `cannot find note with id ${noteId}`
    }
    res.status(404).json(errTwo);
  }
  else {
    res.status(200).json(note);
  }
})

app.post('/api/notes', (req, res) => {
  const fs = require('fs');
  const datajson = require('./data.json');
  const note = req.body
  const noteId = datajson.nextId;
  note.id = noteId;
  datajson.notes[noteId] = note;
  datajson.nextId = parseInt(noteId) + 1;

  if (note.content === undefined) {
    const errOne = {
      'error': 'conent is a required field'
    }
    res.status(400).json(errOne);
  }

  else {
    fs.writeFile('data.json', JSON.stringify(datajson, null, 2), 'utf8', (err) => {
      if (err) {
        const errTwo = {
          'error': 'An unexpected error occured.'
        }
        res.status(500).json(errTwo);
      };
      res.status(201).json(note);
    })
  }
})

app.delete('/api/notes/:id', (req, res) => {
  const fs = require('fs');
  const datajson = require('./data.json');
  const noteId = req.params.id;
  const note = datajson.notes[noteId];
  delete datajson.notes[noteId];

  if (`${parseInt(noteId)}` === 'NaN' || parseInt(noteId) < 1) {
    const errOne = {
      'error': 'id must be a positive integer'
    }
    res.status(400).json(errOne);
  }

  if (note === undefined) {
    const errTwo = {
      'error': `cannot find note with id ${noteId}`
    }
    res.status(404).json(errTwo);
  }

  else {
    fs.writeFile('data.json', JSON.stringify(datajson, null, 2), 'utf8', (err) => {
      if (err) {
        const errThree = {
          'error': 'An unexpected error occured.'
        }
        res.status(500).json(errThree);
      };
      res.sendStatus(204);
    })
  }
})

app.put('/api/notes/:id', (req, res) => {
  const fs = require('fs');
  const datajson = require('./data.json');
  const noteId = req.params.id;
  const originalNote = datajson.notes[noteId];
  const newNote = req.body;
  newNote.id = parseInt(noteId);

  if (`${parseInt(noteId)}` === 'NaN' || parseInt(noteId) < 1) {
    const errOne = {
      'error': 'id must be a positive integer'
    }
    res.status(400).json(errOne);
  }

  if (newNote.content === undefined) {
    const errTwo = {
      'error': 'conent is a required field'
    }
    res.status(400).json(errTwo);
  }

  if (originalNote === undefined) {
    const errThree = {
      'error': `cannot find note with id ${noteId}`
    }
    res.status(404).json(errThree);
  }

  else {
    datajson.notes[noteId] = newNote;
    fs.writeFile('data.json', JSON.stringify(datajson, null, 2), 'utf8', (err) => {
      if (err) {
        const errFour = {
          'error': 'An unexpected error occured.'
        }
        res.status(500).json(errFour);
      };
      res.status(200).json(newNote);
    })
  }

})

app.listen(3000, function () {
  console.log('Listening on port 3000!');
})
