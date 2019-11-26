const path = require('path');
const fs = require('fs');


function filteredNames(directoryPath, fileExtension) {
  const files = fs.readdirSync(directoryPath);
  return files.filter((file) => path.extname(file) === `.${fileExtension}`);
}

export {
  filteredNames,
};
