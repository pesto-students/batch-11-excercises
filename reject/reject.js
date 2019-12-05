
function reject(transformer, list) {
  const matches = list.filter(transformer);
  const nonMatches = list.filter((item) => !matches.includes(item));
  return nonMatches;
}

export {
  reject,
};
