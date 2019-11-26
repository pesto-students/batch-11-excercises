const path = require('path');
const fs = require('fs');

function filteredNamesRecursive(directoryPath, fileExtension) {
  const files = fs.readdirSync(directoryPath);
  return files.reduce((accumalator, currentFile) => {
    if (fs.statSync(path.join(directoryPath, currentFile)).isDirectory()) {
      return accumalator.concat(filteredNamesRecursive(path
        .join(directoryPath, currentFile), fileExtension));
    }
    if (path.extname(currentFile) === `.${fileExtension}`) {
      return accumalator.concat(currentFile);
    }
    return accumalator;
  }, []);
}

export {
  filteredNamesRecursive,
};
