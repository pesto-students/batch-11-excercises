function counter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

export {
  counter,
};
