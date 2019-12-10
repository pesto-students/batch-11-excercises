const sumOfPerfectSquares = (number) => {
  if (number <= 3) return number;

  let res = number;

  for (let i = 1; i <= number; i += 1) {
    const temp = i * i;
    if (temp > number) break;
    else res = Math.min(res, 1 + sumOfPerfectSquares(number - temp));
  }
  return res;
};
export { sumOfPerfectSquares };
