function toPairs(object) {
  const pairs = [];
  for (const [key, value] of Object.entries(object)) {
    pairs.push([key, value]);
  }
  return pairs;
}

export {
  toPairs,
};
