
function diffArray(firstArray, secondArray) {
  var diffArray = [];
  var restOfSecondArray = secondArray;

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      restOfSecondArray = removeElementFromArray(restOfSecondArray, element);
    }
    else {
      diffArray.push(element);
    }
  });

  diffArray = diffArray.concat(restOfSecondArray);


  return diffArray;
}

function removeElementFromArray(array, toBeRemovedValue) {
  return array.filter(function (element) {
    return element !== toBeRemovedValue;
  });
}

export {
  diffArray,
};
