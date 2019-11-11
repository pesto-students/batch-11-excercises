/* eslint-disable no-param-reassign */

function sumEvenArgs(...numbers) {
  return numbers.filter((number) => number % 2 === 0).reduce((total, number) => {
    total += number;
    return total;
  }, 0);
}

export {
  sumEvenArgs,
};
