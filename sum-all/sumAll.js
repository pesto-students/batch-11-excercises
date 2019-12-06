function sumAll(numbers) {
  numbers.sort((a, b) => a - b);
  const starts = numbers[0];
  const ends = numbers[1];
  let totalSum = 0;
  for (let i = starts; i <= ends; i += 1) {
    totalSum += i;
  }
  return totalSum;
}

export {
  sumAll,
};
