
function factorial(...args) {
  const num = args[0];
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

export {
  factorial,
};
