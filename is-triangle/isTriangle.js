
function isTriangle(...sides) {
  const [small, medium, large] = sides.sort((a, b) => a - b);
  return small + medium >= large;
}

export {
  isTriangle,
};
