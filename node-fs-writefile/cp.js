const fs = require('fs');

const fileName = process.argv[2];
const copy = process.argv[3];

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw err;
  const file = data;
  fs.writeFile(copy, file, (err) => {
    if (err) throw err;

  })
})
