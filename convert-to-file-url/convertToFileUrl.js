const path = require('path');

function convertToFileUrl(pathString) {
  const separatedPaths = pathString.split(path.sep);
  const absolutePathPredecessor = (index) => (!path.isAbsolute(pathString) && index === 0 ? '/' : '');
  const predicate = (acc, item, index) => `${acc}${absolutePathPredecessor(index)}${index > 0 ? '/' : ''}${encodeURIComponent(item)}`;

  const a = separatedPaths
    .filter((item) => item)
    .reduce(predicate, 'file:///');
  return a;
}

export {
  convertToFileUrl,
};
