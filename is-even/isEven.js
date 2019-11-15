/* eslint-disable no-bitwise */

function isEven(number) {
  return !((number & 1) === 1);
}

export {
  isEven,
};
