const fs = require('fs');

function linesInFile(file) {
  const fileData = fs.readFileSync(file, 'utf-8');
  const newLines = fileData.split('\n').length - 1;
  console.log(newLines);
  return newLines;
}

export {
  linesInFile,
};
