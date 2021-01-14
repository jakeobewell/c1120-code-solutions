const pg = require('pg');
const express = require('express');
const app = express();
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
    `;

  db.query(sql)
  .then(result => {

    res.status(200).json(result.rows);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({
      'error': 'An unexpected error occurred'
    });
  })
})

app.post('/api/grades', (req, res) => {
  const grade = req.body;

  if (!grade.name || !grade.score || !grade.course) {
      res.status(400).json({'error': 'name, course, and score are required fields'})
    }

  if (parseFloat(grade.score) < 0 || parseFloat(grade.score) > 100) {
    res.status(400).json({'error': 'score must be a number between 0 and 100'})
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;

  const params = [grade.name, grade.course, grade.score];

  db.query(sql, params)
  .then(result => {
    res.status(201).json(result.rows[0]);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({
      'error': 'An unexpected error occurred'
    });
  })
})

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const grade = req.body;

  if (!grade.name || !grade.score|| !grade.course) {
    res.status(400).json({ 'error': 'name, course, and score are required fields' })
  }

  if (parseFloat(grade.score) < 0 || parseFloat(grade.score) > 100) {
    res.status(400).json({ 'error': 'score must be a number between 0 and 100' })
  }

  if (Number.isInteger(gradeId) === false || gradeId < 1) {
    res.status(400).json({'error': 'gradeId must be a positive integer'})
  }

  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *
  `;

  const params = [grade.name, grade.course, grade.score, gradeId];

  db.query(sql, params)
  .then(result => {
    const newGrade = result.rows[0];
    if (!newGrade) {
      res.status(404).json({'error': `Cannot find grade with gradeId ${gradeId}`})
    }
    else {
    res.status(200).json(newGrade);
    }
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({
      'error': 'An unexpected error occurred'
    });
  })
})

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);

  if (Number.isInteger(gradeId) === false || gradeId < 1) {
    res.status(400).json({ 'error': 'gradeId must be a positive integer' })
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  const params = [gradeId];

  db.query(sql, params)
  .then(result => {
    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      res.status(404).json({ 'error': `Cannot find grade with gradeId ${gradeId}` })
    }
    else{
    res.sendStatus(204);
    }
  })
  .catch(err => {
     console.error(err);
     res.status(500).json({
      'error': 'An unexpected error occurred'
    });
  })
})

app.listen(3000, function () {
  console.log('Listening on port 3000!');
})
