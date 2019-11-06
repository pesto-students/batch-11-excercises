
function isOdd(...args) {
  return args / 2 - Math.floor(args / 2) !== 0;
}

export {
  isOdd,
};
