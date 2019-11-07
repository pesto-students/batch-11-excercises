
function diffArray(firstArray, secondArray) {
  const diffArray = [];

  firstArray.forEach(element => {
    if (secondArray.indexOf(element) == -1)
      diffArray.push(element);
  });

  secondArray.forEach(element => {
    if (firstArray.indexOf(element) == -1)
      diffArray.push(element);
  });

  return diffArray;
}

export {
  diffArray,
};
