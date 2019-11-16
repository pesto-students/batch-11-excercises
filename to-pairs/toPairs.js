const toPairs = (object) => {
  const pair = [];
  const keys = Object.keys(object);
  for (const key of keys) {
    const eachPair = [key, object[key]];
    pair.push(eachPair);
  }
  return pair;
};

export { toPairs };
