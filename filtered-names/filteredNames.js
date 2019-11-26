const fs = require('fs');

function filteredNames(directory, extension) {
  let filesWithGivenExtension = [];
  filesWithGivenExtension = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(extension));
  return filesWithGivenExtension;
}

export {
  filteredNames,
};
