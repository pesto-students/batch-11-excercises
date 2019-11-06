
function isTriangle(...lengthOfSides) {
  const [smallestSide, medianSide, largestSide] = lengthOfSides.sort();
  return ((smallestSide + medianSide) > largestSide);
}

export {
  isTriangle,
};
