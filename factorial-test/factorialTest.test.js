const factorial = (number) => {
  let fact = 1;
  while (number !== 0) {
    fact *= number;
    // eslint-disable-next-line
    --number;
  }
  return fact;
};


describe('factorial test', () => {
  test('should find factorial of an integer', () => {
    const actualVal = factorial(5);
    const expectedVal = 120;

    expect(actualVal).toEqual(expectedVal);
  });

  test('should find factorial of 0', () => {
    // delete next line and replace it with proper test
    const actual = factorial(0)
    const expected = 1;
    expect(actual).toEqual(expected);
  });
});
