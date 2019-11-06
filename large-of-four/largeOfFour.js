function getMaxFromList(list) {
  let maximumNumber = -Infinity;
  list.forEach((number) => {
    if (number > maximumNumber) maximumNumber = number;
  });
  return maximumNumber;
}
function largeOfFour(lists) {
  const listOfMaxValues = [];
  const [listOne, listTwo, listThree, listFour] = lists;
  listOfMaxValues.push(getMaxFromList(listOne));
  listOfMaxValues.push(getMaxFromList(listTwo));
  listOfMaxValues.push(getMaxFromList(listThree));
  listOfMaxValues.push(getMaxFromList(listFour));
  return listOfMaxValues;
}

export {
  largeOfFour,
};
