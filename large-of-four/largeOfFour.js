function getMaximumNumberFromList(numbersList) {
  let maximumNumber = -Infinity;
  numbersList.forEach((number) => {
    if (number > maximumNumber) maximumNumber = number;
  });
  return maximumNumber;
}

function largeOfFour(multipleLists) {
  const listOfMaxValues = [];
  const [listOne, listTwo, listThree, listFour] = multipleLists;
  listOfMaxValues.push(getMaximumNumberFromList(listOne));
  listOfMaxValues.push(getMaximumNumberFromList(listTwo));
  listOfMaxValues.push(getMaximumNumberFromList(listThree));
  listOfMaxValues.push(getMaximumNumberFromList(listFour));
  return listOfMaxValues;
}

export {
  largeOfFour,
};
