const fs = require('fs');

const number = Math.random();

fs.writeFile('random.txt', number, (err) => {
  if (err) throw err;
})
