
function counterFactory() {
  let count = 0;
  function increment() {
    count += 1;
    return count;
  }
  function decrement() {
    count -= 1;
    return count;
  }
  return { increment, decrement };
}

export {
  counterFactory,
};
