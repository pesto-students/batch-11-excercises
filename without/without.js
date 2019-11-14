
function without(filterArray, actualArray) {
  const withoutFilter = (number) => {
    const index = filterArray.indexOf(number);
    return !Object.is(number, filterArray[index]);
  };

  return actualArray.filter(withoutFilter);
}

export {
  without,
};
