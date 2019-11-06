
function sumFibs(range) {
  let i = 2;
  let sumOfOddFibonnaciNumbers = 0;

  const fibonnaciValues = [];
  fibonnaciValues.push(0);
  fibonnaciValues.push(1);

  while (i <= range) {
    fibonnaciValues[i] = fibonnaciValues[i - 1] + fibonnaciValues[i - 2];
    i += 1;
  }

  fibonnaciValues.forEach((fibonnaciValue) => {
    if (fibonnaciValue % 2 !== 0 && fibonnaciValue < range) {
      sumOfOddFibonnaciNumbers += fibonnaciValue;
    }
  });

  return sumOfOddFibonnaciNumbers;
}

export {
  sumFibs,
};
