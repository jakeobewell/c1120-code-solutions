const express = require('express');
const path = require('path');

const app = express();

const joined = path.join(__dirname, '/public');

const staticMiddle = express.static('public');

app.use(staticMiddle);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
})
