function binaryAgent(binaryString) {

  const splittedBinary = binaryString.split(' ');
  const binCode = [];

  for (let i = 0; i < splittedBinary.length; i++) {
    binCode.push(String.fromCharCode(parseInt(splittedBinary[i], 2)));
  }
  return binCode.join('');
}

export {
  binaryAgent,
};
