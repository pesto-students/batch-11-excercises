const primalityTest = (number) => {
  for (let i = 2, squareRoot = Math.sqrt(number); i <= squareRoot; i += 1) {
    if (number % 2 === 0) {
      return false;
    }
  }
  return number > 1;
};

export {
  primalityTest,
};
