
function sumFibs(limit) {
  let result = 0;
  let [prev, current] = [1, 0];
  const isOdd = (number) => number % 2 !== 0;

  while (current < limit) {
    current += prev;
    prev = current - prev;
    if (isOdd(current) && current < limit) {
      result += current;
    }
  }
  return result;
}

export {
  sumFibs,
};
