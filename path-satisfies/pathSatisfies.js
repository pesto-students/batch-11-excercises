
function pathSatisfies(predicate, path, targetObject) {
  const resultObj = path.reduce((acc, current) => {
    if (((acc instanceof Array && typeof current === 'number')) || acc[current] !== undefined) {
      return acc[current];
    }
    return {};
  }, targetObject);

  return predicate(resultObj);
}

export {
  pathSatisfies,
};
