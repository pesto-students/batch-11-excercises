
function lastIndexOf(numberToFind, numbers) {
  const numbersReversed = numbers.slice().reverse();
  const indexFromBack = (numbers.length - 1) - numbersReversed.indexOf(numberToFind);
  return indexFromBack >= numbers.length ? -1 : indexFromBack;
}

export {
  lastIndexOf,
};
