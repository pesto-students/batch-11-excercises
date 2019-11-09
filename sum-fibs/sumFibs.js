
function sumFibs(upperBound) {
  let num1 = 1;
  let num2 = 1;
  let sumOfOddFibs = 2;
  while (num2 <= upperBound) {
    const temp = num1;
    num1 = num2;
    num2 += temp;
    if (num2 % 2 !== 0 && num2 <= upperBound) {
      sumOfOddFibs += num2;
    }
  }
  return sumOfOddFibs;
}

export {
  sumFibs,
};
