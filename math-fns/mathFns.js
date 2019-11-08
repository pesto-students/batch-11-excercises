
function sqrt(number) {
  for (let i = 0; i * i <= number; i += 1) {
    if (i * i === number) {
      return i;
    }
  }
  return null;
}

function round(decimalNumber) {
  const stringifiedNumber = decimalNumber.toString().split('');
  if (stringifiedNumber[stringifiedNumber.length - 1] > 5) {
    return Number(stringifiedNumber[0]) + 1;
  }
  return Number(stringifiedNumber[0]);
}

function power(number, exponent) {
  return number ** exponent;
}

export {
  sqrt,
  round,
  power,
};
