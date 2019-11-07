
function largeOfFour(...args) {
  const numArrays = args[0];

  const largestOfFour = numArrays.map((subArray) => {
    return Math.max(...subArray);
  });
  return largestOfFour;
}

export {
  largeOfFour,
};
