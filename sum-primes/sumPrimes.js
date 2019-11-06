
function sumPrimes(...args) {
  var result = 0;
  for (var i=2;i<args[0];i++){
    if(isPrime(i)) {
      result = result + i;
    }
  }
  return result;
}

function isPrime(value){

  for(var i=2;i<value/2; i++){
    if(value%i === 0 && value !== i){
      return false;
    }
  }
}

export {
  sumPrimes,
};
