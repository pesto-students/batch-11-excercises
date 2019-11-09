
function rectangleDiagonal(length, height) {
  const lengthSquare = length ** 2;
  const heightSquare = height ** 2;
  const diagonal = (lengthSquare + heightSquare) ** 0.5;
  return diagonal;
}

export {
  rectangleDiagonal,
};
