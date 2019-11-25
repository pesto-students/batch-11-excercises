
function lastIndexOf(number, list) {
  return list.reduce((acc, current, index) => {
    if (number === current) {
      return index;
    }
    return acc;
  }, -1);
}

export {
  lastIndexOf,
};
