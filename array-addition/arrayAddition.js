function arrayAddition(array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length !== 0 && array2.length !== 0) {
      let longestArray;
      let shortestArray;

      if (array1.length >= array2.length) {
        longestArray = array1;
        shortestArray = array2;
      } else {
        longestArray = array2;
        shortestArray = array1;
      }
      return longestArray.map((value, index) => {
        if (typeof value !== 'number' && typeof shortestArray[index] !== 'number') {
          throw Error('Pass two numeric arrays as arguments');
        }
        if (index < shortestArray.length) {
          value += shortestArray[index];
        }
        return value;
      });
    }
  }
  throw Error('Pass two numeric arrays as arguments');
}

export {
  arrayAddition,
};