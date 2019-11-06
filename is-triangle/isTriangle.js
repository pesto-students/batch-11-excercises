
function isTriangle(...sides) {
  const [firstSide, secondSide, thirdSide] = sides;
  return firstSide + secondSide > thirdSide
    && secondSide + thirdSide > firstSide
    && firstSide + thirdSide > secondSide;
}

export {
  isTriangle,
};
