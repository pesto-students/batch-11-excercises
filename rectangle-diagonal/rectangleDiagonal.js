
function rectangleDiagonal(rectangleSide1, rectangleSide2) {
  const rectangleDiagonalSide = rectangleSide1 ** 2 + rectangleSide2 ** 2;

  return Math.sqrt(rectangleDiagonalSide);
}

export {
  rectangleDiagonal,
};
