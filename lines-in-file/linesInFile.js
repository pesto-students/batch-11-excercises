const fs = require('fs');

const isNewLineChar = (char) => char === '\n' || char === '\r\n';
function linesInFile(fileURL) {
  if (!fileURL) throw new Error(`Please provide valid file path.Received ${fileURL}`);
  const fileContent = fs.readFileSync(fileURL, 'utf8');
  const chars = fileContent.split('');
  const newLineChars = chars.filter(isNewLineChar);
  return newLineChars.length;
}

export {
  linesInFile,
};
