
function calculateDiagonalLength(...dimensions) {
  const [length, breadth] = dimensions;
  const squaredLength = length ** 2;
  const squaredBreadth = breadth ** 2;
  const squaredDiagonal = squaredBreadth + squaredLength;
  const diagonal = Math.sqrt(squaredDiagonal);
  return diagonal;
}

export {
  calculateDiagonalLength,
};
