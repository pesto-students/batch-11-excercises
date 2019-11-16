function factorial(num) {
  if (num === 0 || num === 1) return 1;

  for (let i = num - 1; i >= 1; i -= 1) {
    num *= i;
  }
  return num;
}

export { factorial };
