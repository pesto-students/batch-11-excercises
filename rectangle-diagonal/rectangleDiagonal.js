
function rectangleDiagonal(...sides) {
  const [length, width] = sides;
  const a = length ** 2;
  const b = width ** 2;
  const rectangleDiagonalLength = Math.sqrt(a + b);
  return rectangleDiagonalLength;
}

export {
  rectangleDiagonal,
};
