const convertNumber = (float, decimalPlaces) => {
  const floatDecimals = Math.abs(float) % 1 === 0 ? 0 : float.toString(10).split('.')[1].length;
  return (Math.abs(float) * 10 ** decimalPlaces).toFixed(floatDecimals);
};

const round = (float, decimalPlaces, action = 'round') => {
  const converted = convertNumber(float, decimalPlaces);
  let rounded = Math.round(converted);
  if (action === 'up') {
    rounded = Math.sign(float) === 1 ? Math.ceil(converted) : Math.floor(converted);
  } else if (action === 'down') {
    rounded = Math.sign(float) !== 1 ? Math.ceil(converted) : Math.floor(converted);
  }
  return (Math.sign(float) * rounded) / 10 ** decimalPlaces;
};

const roundTo = (float, decimalPlaces) => round(float, decimalPlaces);
roundTo.up = (float, decimalPlaces) => round(float, decimalPlaces, 'up');
roundTo.down = (float, decimalPlaces) => round(float, decimalPlaces, 'down');

export {
  roundTo,
};
