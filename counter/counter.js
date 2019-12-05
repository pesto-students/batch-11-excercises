function counter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

export { counter };
