
function addBigIntegers(string) {
  const splitted = string.split('\n');
  const bigNumbers = [...splitted.slice(1)];
  const reversedNumbers = bigNumbers.map((number) => number.split('').reverse().join(''));
  const maxLength = reversedNumbers.reduce((len, number) => (
    number.length > len ? number.length : len
  ), 0);

  let i = 0;
  let addition = ''; let carry = 0;
  while (i < maxLength) {
    // eslint-disable-next-line no-loop-func
    const sumOfDigits = reversedNumbers.reduce((sum, number) => (
      number[i] ? sum + Number(number[i]) : sum
    ), 0);
    const stringSum = (sumOfDigits + carry).toString(10);
    carry = Number(stringSum.substring(0, stringSum.length - 1));
    addition += stringSum.substring(stringSum.length - 1);
    i += 1;
  }

  const result = addition.split('').reverse().join('');
  return carry === 0 ? result : carry + result;
}

export {
  addBigIntegers,
};
