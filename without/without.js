function without(argFirst, argSecond) {
  const resultingArray = [];
  const isMinusZero = (value) => 1 / value === -Infinity;
  argSecond.map((value) => {
    if (value === 0 || isMinusZero(value)) {
      return resultingArray.push(value);
    }
    if (Number.isNaN(value)) {
      return [...resultingArray];
    }
    if (argFirst.indexOf(value) === -1) {
      resultingArray.push(value);
    }

    return [...resultingArray];
  });
  return resultingArray;
}

export {
  without,
};
