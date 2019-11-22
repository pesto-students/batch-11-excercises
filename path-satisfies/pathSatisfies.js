
function pathSatisfies(predicate, path, object) {
  return path.reduce((acc, key, index) => {
    if (key in object) {
      if (typeof object[key] === 'object') {
        return pathSatisfies(predicate, path.slice(index + 1), object[key]);
      }
      return predicate(object[key]);
    }
    return acc === true;
  }, false);
}

export {
  pathSatisfies,
};
