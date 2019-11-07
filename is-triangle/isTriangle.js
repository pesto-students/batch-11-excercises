
function isTriangle(...triangleSides) {
  const [small, medium, large] = triangleSides.sort((a, b) => a - b);
  return small + medium >= large;
}

export {
  isTriangle,
};
