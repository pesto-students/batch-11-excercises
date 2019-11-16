function union(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  const isMinusZero = (value) => 1 / value === -Infinity;
  const uniqueArray = jointArray.reduce((newArray, item) => {
    if (item === 0 || isMinusZero(item)) {
      return [...newArray, item];
    }
    if (newArray.includes(item)) {
      return newArray;
    }
    return [...newArray, item];
  }, []);
  return uniqueArray;
}

export {
  union,
};
