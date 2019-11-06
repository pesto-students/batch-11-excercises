function factorial(num) {
  let total = 1;

  for (let i = 0; i < num; i = i + 1) {
    total = total * (num - i);
  }

  return total;
}

export { factorial };
