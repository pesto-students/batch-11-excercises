function counter() {
  let count = 0;
  function incrementCount() {
    count += 1;
    return count;
  }
  return incrementCount;
}

export {
  counter,
};
