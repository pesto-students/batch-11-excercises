
function sumFibs(number) {
  if (typeof number !== 'number') {
    return false;
  }

  const arrayFibonacci = [1, 1];
  let nextFibonacci = 0;

  while ((nextFibonacci = arrayFibonacci[0] + arrayFibonacci[1]) <= number) {
    arrayFibonacci.unshift(nextFibonacci);
  }

  return arrayFibonacci.filter((x) => x % 2 !== 0).reduce((x, y) => x + y);
}

export {
  sumFibs,
};
