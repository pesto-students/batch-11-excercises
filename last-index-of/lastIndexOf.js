function lastIndexOf(target,numbers) {
  let lastIndex = -1;

  numbers.forEach((number, index) => {
    if (target === number) {
      lastIndex = index;
    }
  })

  return lastIndex;
}

export {
  lastIndexOf,
};
