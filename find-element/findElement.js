
function findElement(...args) {
  const [numbers, predicate] = args;
  for (const number of numbers) {
    if (predicate(number)) {
      return number;
    }
  }
  return undefined;
}

export {
  findElement,
};
