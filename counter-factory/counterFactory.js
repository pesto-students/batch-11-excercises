
function counterFactory() {
  let count = 0;
  const increment = () => {
    count += 1;
    return count;
  };

  const decrement = () => {
    count -= 1;
    return count;
  };

  return { increment, decrement };
}

export {
  counterFactory,
};
