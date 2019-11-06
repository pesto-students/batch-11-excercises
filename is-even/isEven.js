
function isEven(value) {
  return (parseInt(value / 2, 10) === parseInt(((value + 1) / 2), 10));
}

export {
  isEven,
};
