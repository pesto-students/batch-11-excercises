
function rectangleDiagonal(height, width) {
  const squaredHeight = height ** 2;
  const squaredWidth = width ** 2;
  const sumOfSquaredHeightAndWidth = squaredHeight + squaredWidth;
  const lengthOfDiagonal = Math.sqrt(sumOfSquaredHeightAndWidth);
  return lengthOfDiagonal;
}

export {
  rectangleDiagonal,
};
