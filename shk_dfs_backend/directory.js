const fs = require('fs');
const path = require('path');

const searchFiles = (Path, callback) => {
    fs.readdir(Path, (err, files) => {
        if (err) {
          console.error('Ошибка чтения папки практика:', err);
          return;
        }
        callback(files);
    });
}

module.exports = searchFiles
