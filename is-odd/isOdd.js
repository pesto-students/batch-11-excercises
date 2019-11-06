
function isOdd(integer) {
  const binaryString = integer.toString(2);
  const lastBit = binaryString[binaryString.length - 1];

  // If bitwise AND between last bit and 1 is equal to 1, then it is odd, otherwise even
  // eslint-disable-next-line no-bitwise
  if (!(lastBit & 1)) {
    return false;
  }
  return true;
}

export {
  isOdd,
};
