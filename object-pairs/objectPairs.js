
function objectPairs(inputObject) {
  const keys = Object.keys(inputObject);
  const pairs = [];
  keys.forEach((key) => {
    const pair = [key, inputObject[key]];
    pairs.push(pair);
  });
  return pairs;
}

export {
  objectPairs,
};
