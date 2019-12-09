
function dropElements(array, predicate) {
  const filteredElements = array.filter(predicate);
  return filteredElements;
}

export {
  dropElements,
};
