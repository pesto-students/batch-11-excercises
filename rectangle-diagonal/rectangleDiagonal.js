
function rectangleDiagonal(a, b) {
  const cSquared = a * a + b * b;
  for (let i = b; (i < cSquared / 2); i += 1) {
    if ((i * i) === cSquared) {
      return i;
    }
  }
  return null;
}

export {
  rectangleDiagonal,
};
