
function dropElements(numbers, droppingCheck) {
  const sanitizedNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (droppingCheck(numbers[i])) {
      sanitizedNumbers.push(numbers[i]);
    }
  }
  return sanitizedNumbers;
}

export {
  dropElements,
};
