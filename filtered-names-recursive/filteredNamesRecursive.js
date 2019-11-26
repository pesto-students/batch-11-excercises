const fs = require('fs');
const path = require('path');

function filteredNamesRecursive(directory, extension) {
  const allFilesRecursive = fs.readdirSync(directory).map((file) => {
    if (fs.statSync(path.join(directory, file)).isDirectory()) {
      return filteredNamesRecursive(path.join(directory, file), extension);
    }
    return file;
  }).flat();
  const filesWithExtension = allFilesRecursive.filter((file) => file.endsWith(extension));
  return filesWithExtension;
}

export {
  filteredNamesRecursive,
};
