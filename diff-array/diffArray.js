
function diffArray(...args) {
  const array1 = args[0];
  const array2 = args[1];
  const unionArray = [...array1, ...array2];

  const arrayDifference = unionArray.filter((item) => {
    if (!array1.includes(item)) {
      return item;
    }
    if (!array2.includes(item)) {
      return item;
    }
  });

  return arrayDifference;
}

export {
  diffArray,
};
