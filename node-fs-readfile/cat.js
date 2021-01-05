const fs = require('fs');

const textFiles = process.argv;

const logFiles = () => {

  for (let i = 2; i < textFiles.length; i++) {
    let files = '';
    fs.readFile(textFiles[i], 'utf8', (err, data) => {
      if (err) throw err;
      files += (data + '\n');
      }
    });
  }
}
