
function primalityTest(number) {
  let prime = true;
  if (number < 2) {
    prime = false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
}

export {
  primalityTest,
};
