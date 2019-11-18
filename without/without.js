
function without(filterArray, actualArray) {
  const compareArray = (arr1, arr2) => {
    return arr1.reduce((acc, current, index) => {
      console.log(current, arr2[index]);
      if(acc && current !== arr2[index]) {
        console.log(current, arr2[index]);
        acc = false;
      }
      return acc;
    }, true);
  };

  const isArrayContains = (array, element) => {
    for (const arrayEle of array) {
      if (arrayEle.length === element.length) {
        if (!compareArray(arrayEle, element)) {
          return false;
        }
      }
    }
    return true;
  };

  const withoutFilter = (number) => {
    if (filterArray.includes(number) && isNaN(number)) {
      return false;
    }
    if (number instanceof Array) {
      return !isArrayContains(filterArray, number);
    }
    const index = filterArray.indexOf(number);
    return !Object.is(number, filterArray[index]);
  };

  return actualArray.filter(withoutFilter);
}

export {
  without,
};
