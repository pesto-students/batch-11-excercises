
function dropElements(...args) {
  const [numbers, predicate] = args;
  const filteredArray = numbers.filter(predicate);
  return filteredArray;
}

export {
  dropElements,
};
