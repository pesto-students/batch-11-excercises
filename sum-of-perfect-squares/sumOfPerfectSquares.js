function nearestSquare(number) {
  if (Math.sqrt(number) % 1 === 0) {
    return number;
  }

  return nearestSquare(--number);
}

function sumOfPerfectSquares(sumSquareNumber) {
  let count = 0;
  while (sumSquareNumber !== 0) {
    sumSquareNumber -= nearestSquare(sumSquareNumber);
    count += 1;
  }
  return count;
}

export {
  sumOfPerfectSquares,
};
