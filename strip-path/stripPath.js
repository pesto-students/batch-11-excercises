const path = require('path');

function stripPath(filepath, input) {
  if (typeof filepath !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof filePath}`);
  }
  if (input === null) {
    return filepath;
  }
  const pathName = path.normalize(filepath);
  const stripWith = path.normalize(input);
  let trimedPath = pathName.replace(stripWith, '');
  if (trimedPath[0] === '/') {
    trimedPath = trimedPath.substring(1);
  }
  return trimedPath;
}

export {
  stripPath,
};
