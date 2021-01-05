const fs = require('fs');
let jsonData = require('./data.json');
const command = process.argv[2]
let {
  notes,
  nextId
} = jsonData;

let newData = {

}

const input = () => {
if (command === 'read') {
    for (const [key, value] of Object.entries(notes)) {
    console.log(`${key}: ${value}`);
    }
  }
  if (command === 'write') {
    notes[nextId] = process.argv[3];
    nextId = `${parseInt(nextId) + 1}`;
    jsonData.notes = notes;
    jsonData.nextId = nextId;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) throw err;
    })
  }
  if (command === 'delete') {
    delete notes[process.argv[3]];
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) throw err;
    })
  }
  if (command === 'update')
  notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) throw err;
  })
}

input();
