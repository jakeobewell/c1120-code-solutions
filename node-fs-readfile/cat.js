const fs = require('fs');

const textFiles = process.argv;

const logFiles = () => {
let files = '';

  for (let i = 2; i < textFiles.length; i++) {
    fs.readFile(textFiles[i], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
}
