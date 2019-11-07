
function chunkArrayInGroups(numbers, size) {
  const groupedNumbers = [];
  for (let i = 0; i < numbers.length; i += size) {
    groupedNumbers.push(numbers.slice(i, i + size));
  }
  return groupedNumbers;
}

export {
  chunkArrayInGroups,
};
