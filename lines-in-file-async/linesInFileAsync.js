const fs = require('fs');

const isNewLineChar = (char) => char === '\n' || char === '\r\n';

function linesInFileAsync(fileURL) {
  return new Promise((resolve, reject) => {
    if (!fileURL) reject(new Error(`Please provide valid file path.Received ${fileURL}`));
    fs.readFile(fileURL, 'utf8', (err, fileContent) => {
      if (err) {
        reject(err);
      } else {
        const chars = fileContent.split('');
        const newLineChars = chars.filter(isNewLineChar);
        resolve(newLineChars.length);
      }
    });
  });
}

export { linesInFileAsync };
