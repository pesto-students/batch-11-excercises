
function checkPrimeNumber(numbertoCheck){

    if(numbertoCheck === 1){
      return false;
    }

    for(let i = 2; i*i <= numbertoCheck; i++){
        if(numbertoCheck % i === 0) {
          return false;
        }
    }
    return true;
}

function sumPrimes(numberRange) {

  let primeAddition = 0;

  for(let i = 2; i <= numberRange; i++){
      if(checkPrimeNumber(i)){
        primeAddition += i;
      }
  }

  return primeAddition;
}

export {
  sumPrimes,
};
