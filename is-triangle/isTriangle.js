
function isTriangle(...sidesOfTriangle) {
  sidesOfTriangle.sort((side1, side2) => side1 - side2);
  const [smallestSide, mediumSized, largestSide] = sidesOfTriangle;
  return smallestSide + mediumSized >= largestSide;
}

export {
  isTriangle,
};
