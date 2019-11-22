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
// const isPositive = (n) => n > 0;
// console.log(
//   pathSatisfies(isPositive, ['x', 1, 'y'], { x: [{ y: -1 }, { y: 1 }] }),
// );
export { pathSatisfies };
