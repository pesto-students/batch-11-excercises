function sqrt(number) {
  let index = 1;
  while (index * index <= number) {
    if (index * index === number) {
      return index;
    }
    index += 1;
  }
  return -1;
}

function power(number, toThePower) {
  const powerArray = Array.from(Array(toThePower).keys());
  return powerArray.reduce((accumulator) => accumulator * number, 1);
}

function round(number) {
  return Math.floor(number);
}

export {
  sqrt,
  power,
  round,
};
