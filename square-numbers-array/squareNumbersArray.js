
function squareNumbersArray(numbers) {
  var squareOfNumbers = [];
  numbers.forEach(number => {
    if (typeof number !== 'number') {
      throw new Error("Array should have only numbers");
    }
    squareOfNumbers.push(number * number);
  });

  return squareOfNumbers;
}

export {
  squareNumbersArray,
};
