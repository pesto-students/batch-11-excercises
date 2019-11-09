
function permutateWithRepetitions(alphabets) {
  const numberOfAlphabets = alphabets.length;
  return alphabets.reduce((accumulator) => numberOfAlphabets * accumulator, 1);
}

export {
  permutateWithRepetitions,
};
