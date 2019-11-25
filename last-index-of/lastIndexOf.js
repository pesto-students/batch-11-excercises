const lastIndexOf = (item, list) => {
  let lastIndex = -1;
  list.forEach((i, currentIndex) => {
    if (i === item) {
      lastIndex = currentIndex;
    }
  });
  return lastIndex;
};

export { lastIndexOf };
