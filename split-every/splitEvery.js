function splitEvery(howMany, list) {
  if (howMany <= 0) {
    throw new Error();
  }
  const result = [];
  let i = 0;
  while (i < list.length) {
    result.push(list.slice(i, i + howMany));
    i += howMany;
  }
  return result;
}

export {
  splitEvery,
};
