
function objectPairs(inputObject) {
  var objectPairArray = [];

  Object.keys(inputObject).forEach(key => {
    objectPairArray.push([key,inputObject[key]])
  })

  return objectPairArray;
}

export {
  objectPairs,
};
