
function findElement(numbers,checkCondition) {
  var resultNumber;

  for(var i=0;i<numbers.length;i++){
    if(checkCondition(numbers[i])){
      resultNumber =  numbers[i];
      break;
    }
  }

  return resultNumber;

}

export {
  findElement,
};
