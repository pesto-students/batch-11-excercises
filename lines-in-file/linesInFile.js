import fs from 'fs';

function linesInFile(filePath) {
  const data = fs.readFileSync(filePath);
  const getLinesInString = (string) => string.split('\n').length - 1;

  return getLinesInString(data.toString());
}

export {
  linesInFile,
};
