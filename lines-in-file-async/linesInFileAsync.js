const fs = require('fs');

function linesInFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const newLinesCount = data.split('\n').length - 1;
        resolve(newLinesCount);
      }
    });
  });
}

export {
  linesInFileAsync,
};
