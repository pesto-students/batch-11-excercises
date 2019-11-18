
function xprod(firstArray, secondArray) {
  let resultArray = [];
  const getAllPosibleCombination = (element, array) => array.map((current) => [element, current]);

  resultArray = firstArray.reduce((acc, current) => acc.concat(getAllPosibleCombination(current, secondArray)), []);

  return resultArray;
}

export {
  xprod,
};
