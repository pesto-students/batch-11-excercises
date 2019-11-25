function lastIndexOf(target, numbers) {
  let lastIndex = -1;
  numbers.forEach((number, index) => {
    if (number === target) {
      lastIndex = index;
    }
  });
  return lastIndex;
}

export { lastIndexOf };
