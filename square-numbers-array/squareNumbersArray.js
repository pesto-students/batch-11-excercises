
function squareNumbersArray(numberArray) {
  
  numberArray.forEach(element => {
      if(typeof element !== 'number'){
        throw new CustomError('My custom error');
      }
  })

  let squaredArray = numberArray.map((elementValue) => {
    return Math.pow(elementValue,2);
  });

  return squaredArray;
}

export {
  squareNumbersArray,
};
