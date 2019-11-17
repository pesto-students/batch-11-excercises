
function rectangleDiagonal(...dimensions) {
  const [length, breadth] = dimensions;
  const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(breadth, 2));
  return diagonal;
}

export {
  rectangleDiagonal,
};
