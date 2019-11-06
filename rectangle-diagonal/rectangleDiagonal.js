
function rectangleDiagonal(...args) {
  const [a, b] = args;
  let diagonal = (a ** 2) + (b ** 2);
  diagonal = Math.sqrt(diagonal);
  return diagonal;
}

export {
  rectangleDiagonal,
};
