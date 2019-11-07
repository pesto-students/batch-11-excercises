
function findElement(numbers,shouldReturnNumber) {
  var resultNumber;

  for(var i=0;i<numbers.length;i++){
    if(shouldReturnNumber(numbers[i])){
      resultNumber =  numbers[i];
      break;
    }
  }

  return resultNumber;

}

export {
  findElement,
};
