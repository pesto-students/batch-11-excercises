const rectangleDiagonal = (side1, side2) => {
  const squareOfSide1 = side1 * side1;
  const squareOfSide2 = side2 * side2;
  return Math.sqrt(squareOfSide1 + squareOfSide2);
};

export { rectangleDiagonal };
