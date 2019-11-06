/* eslint-disable no-restricted-properties */

function rectangleDiagonal(...sides) {
  const [length, width] = sides;
  const squareOfLength = Math.pow(length, 2);
  const squareOfWidth = Math.pow(width, 2);
  const lengthOfDiagonal = Math.sqrt(squareOfLength + squareOfWidth);
  return lengthOfDiagonal;
}

export {
  rectangleDiagonal,
};
