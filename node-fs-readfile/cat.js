const fs = require('fs');

const textFiles = process.argv;

let i = 2;

const logFiles = () => {
  fs.readFile(textFiles[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data + "\n");
    i++;
    if (i < textFiles.length) {
      logFiles();
    }
  })
}

logFiles();
