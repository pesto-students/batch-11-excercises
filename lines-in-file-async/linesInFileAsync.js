const fs = require('fs');
const os = require('os');

function linesInFileAsync(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'UTF-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.split(os.EOL).length - 1);
      }
    });
  });
}

export {
  linesInFileAsync,
};
