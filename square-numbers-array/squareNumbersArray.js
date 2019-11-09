function squareNumbersArray(numbers) {
  const result = numbers.map((number) => {
    if (typeof number !== 'number') {
      throw new Error('My custom error');
    }
    return number * number;
  });
  return result;
}

export {
  squareNumbersArray,
};
