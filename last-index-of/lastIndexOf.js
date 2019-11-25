
function lastIndexOf(element, list) {
  const lastIndex = list.reduce((accumulator, currentValue, currentIndex) => {
    if (currentValue === element) {
      accumulator = currentIndex;
    }
    return accumulator;
  }, -1);
  return lastIndex;
}

export {
  lastIndexOf,
};
