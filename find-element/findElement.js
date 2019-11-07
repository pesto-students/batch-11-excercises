
function findElement(numbers, truthTest) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (truthTest(numbers[i])) {
      return numbers[i];
    }
  }
  return undefined;
}

export {
  findElement,
};
