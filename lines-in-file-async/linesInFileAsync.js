import fs from 'fs';

function linesInFileAsync(filePath) {
  const getLinesInString = (string) => string.split('\n').length - 1;
  const filePromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(getLinesInString(data.toString()));
    });
  });

  return filePromise;
}

export {
  linesInFileAsync,
};
