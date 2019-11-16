function toPairs(object) {
  const pairs = [];
  Object.keys(object).map((key) => pairs.push([key, object[key]]));
  return pairs;
}

export {
  toPairs,
};
