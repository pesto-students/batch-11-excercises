const pathSatisfies = (predicate, pathList, object) => {
  let isPathSatisfy = false;

  for (let i = 0; i < pathList.length; i += 1) {
    if (pathList.length === 0) {
      return false;
    }
    const property = pathList[i];
    if (property in object) {
      if (typeof object[property] === 'object') {
        return pathSatisfies(
          predicate,
          pathList.slice(i + 1),
          object[property],
        );
      }
      isPathSatisfy = predicate(object[property]);
    }
  }
  return isPathSatisfy;
};

export { pathSatisfies };
