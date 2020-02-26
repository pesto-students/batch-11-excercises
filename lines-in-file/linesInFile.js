const fs = require('fs');

function linesInFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf-8');
  const newLinesCount = text.split('\n').length - 1;
  return newLinesCount;
}

export {
  linesInFile,
};
