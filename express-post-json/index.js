const express = require('express');
const app = express();

let nextId = 1;

const grades = {};

const middle = express.json();

app.use(middle);

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const id in grades) {
    gradesArr.push(grades[id]);
  }
  res.json(gradesArr)
})

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.status(201).json(grade);
})

app.listen(3000, function () {
  console.log('Listening on port 3000!');
})
