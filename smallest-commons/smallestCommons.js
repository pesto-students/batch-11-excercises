function smallestCommons(array) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  const lcm = (x, y) => (x * y) / gcd(x, y);

  let max = Math.max(array[0], array[1]);
  let min = Math.min(array[0], array[1]);

  let currentLcm = min;
  while (min < max) {
    min += 1;
    currentLcm = lcm(currentLcm, min);
  }
  return currentLcm;
}

export { smallestCommons };
