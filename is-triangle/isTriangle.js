
function isTriangle(...lengthOfSides) {
  // A triangle is valid if sum of its two sides is greater than the third side.
  const [smallestSide, mediumSide, largestSide] = lengthOfSides.sort();

  return (smallestSide + mediumSide > largestSide);
}

export {
  isTriangle,
};
