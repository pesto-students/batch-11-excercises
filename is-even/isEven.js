
function isEven(...args) {
  return /^-?\d*[02468]$/.test(args);
}

export {
  isEven,
};
