
function mapFilterAndReduce(names) {
  const nameList = names.map((nameObj) => nameObj.firstName);
  const isLengthLessThanFive = (name) => name.length < 5;
  const filteredNameList = nameList.filter(isLengthLessThanFive);
  const reducedNameObj = filteredNameList.reduce((acc, name) => {
    acc[name] = name.length;
    return acc;
  }, {});

  return reducedNameObj;
}

export {
  mapFilterAndReduce,
};
