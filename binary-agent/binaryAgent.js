function binaryAgent(binaryString) {
  return String.fromCharCode(...binaryString.split(' ').map((char) => parseInt(char, 2)));
}

export {
  binaryAgent,
};
