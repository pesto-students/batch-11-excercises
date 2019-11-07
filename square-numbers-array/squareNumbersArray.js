
function squareNumbersArray(numberArray) {

  let squaredArray = [];
  
  numberArray.forEach((element) => {
      if(typeof element !== 'number'){
        throw new Error('My custom error');
      }else{
        squaredArray.push(Math.pow(element,2));
      }
  });

  return squaredArray;
}

export {
  squareNumbersArray,
};
