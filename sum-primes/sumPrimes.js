
function sumPrimes(...args) {
  let sum = 0;
  for (let i = 2; i <= args; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function isPrime(num) {
  if (num === 2) {
    return true;
  } else {
    let flag = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false;
      }
    }
    return flag;
  }
}

export {
  sumPrimes,
};
