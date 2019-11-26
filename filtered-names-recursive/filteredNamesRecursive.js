const fs = require('fs');
const path = require('path');

function filteredNamesRecursive(directory, fileExtension) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  return files.reduce((acc, file) => {
    if (file.isFile()) {
      if (path.extname(file.name) === `.${fileExtension}`) {
        acc.push(file.name);
      }
    }
    if (file.isDirectory()) {
      return acc.concat(filteredNamesRecursive(path.join(directory, file.name), fileExtension));
    }
    return acc;
  }, []);
}

export {
  filteredNamesRecursive,
};
