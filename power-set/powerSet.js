
function powerSet(inputArray) {
  let resultArray = [];
  const getPowerSet = (acc, element) => {
    return acc.reduce((innerAcc, current) => innerAcc.concat([current.concat(element)]), []);
  };


  resultArray = inputArray.reduce((acc, element) => acc.concat(getPowerSet(acc, element)), [[]]);


  return resultArray;
}

export {
  powerSet,
};
