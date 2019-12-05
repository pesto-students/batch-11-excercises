function factorial(number) {
  let total = 1;

  for (let i = 0; i < number; i++) {
    total = total * (number - i);
  }

  return total;
}

export { factorial };
