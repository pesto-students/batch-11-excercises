function objectPairs(object) {
  const arrayPairs = [];
  Object.keys(object).map((item) => arrayPairs.push([item, object[item]]));
  return arrayPairs;
}

export { objectPairs };
