const factorial = (number) => {
  let numberCopy = number;
  let fact = 1;
  if (numberCopy === 0) return 0;
  while (numberCopy !== 0) {
    fact *= numberCopy;
    numberCopy -= 1;
  }
  return fact;
};


describe('factorial test', () => {
  test('should find factorial of an integer', () => {
    const actual = factorial(5);
    const expected = 120;

    expect(actual).toEqual(expected);
  });

  test('should find factorial of 0', () => {
    // delete next line and replace it with proper test
    const actual = factorial(0);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});
