const path = require('path');

function stripPath(originalPath, input) {
  path.parse(originalPath);
  const trimedPath = originalPath.replace(input, '');
  return path.normalize(trimedPath);
}

export {
  stripPath,
};
