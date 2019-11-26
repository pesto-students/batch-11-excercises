const fs = require('fs');
const path = require('path');

function filteredNames(directory, fileExtension) {
  const files = fs.readdirSync(directory);
  return files.filter((file) => path.extname(file) === `.${fileExtension}`);
}

export {
  filteredNames,
};
