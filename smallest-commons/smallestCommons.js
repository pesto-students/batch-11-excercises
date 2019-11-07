
function smallestCommons(range) {
  const [low, high] = range.sort((a, b) => a - b);
  let lcmOfRange = low;
  for (let i = low; i < high; i++) {
    lcmOfRange = calculateLCM(lcmOfRange, i + 1);
  }
  return lcmOfRange;
}

function calculateGCD(firstNumber, secondNumber) {
  if (firstNumber === 0) {
    return secondNumber;
  } else {
    return calculateGCD(secondNumber % firstNumber, firstNumber);
  }
}

function calculateLCM(firstNumber, secondNumber) {
  return (firstNumber * secondNumber) / calculateGCD(firstNumber, secondNumber);
}

export {
  smallestCommons,
};
