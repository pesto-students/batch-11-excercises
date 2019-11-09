function nearestSquare(number) {
  if (Math.sqrt(number) % 1 === 0) {
    return number;
  }

  // eslint-disable-next-line no-plusplus
  return nearestSquare(--number);
}

function sumOfPerfectSquares(number) {
  let count = 0;
  let sumSquareNumber = number;
  while (sumSquareNumber !== 0) {
    sumSquareNumber -= nearestSquare(sumSquareNumber);
    count += 1;
  }
  return count;
}

export {
  sumOfPerfectSquares,
};
