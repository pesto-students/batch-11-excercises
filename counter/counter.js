
function counter() {
  let count = 0;
  function incrementCounter() {
    count += 1;
    return count;
  }
  return incrementCounter;
}

export {
  counter,
};
