
function isTriangle(a, b, c) {
  const arr = [a, b, c];
  arr.sort();
  return arr[0] + arr[1] > arr[2];
}

export {
  isTriangle,
};
