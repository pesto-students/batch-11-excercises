
function roundTo(number, decimalPlaces) {
  const numberAbsolute = Math.abs(number);
  const tensMultiplier = 10 ** (decimalPlaces + 1);
  const testDivisor = 10 ** decimalPlaces;
  return Math.sign(number) * (
    Math.round((Math.round(numberAbsolute * tensMultiplier) / 10)) / testDivisor);
}

roundTo.down = function down(number, decimalPlaces) {
  const tensMultiplier = 10 ** decimalPlaces;
  return Math.floor(number * tensMultiplier) / tensMultiplier;
};

roundTo.up = function up(number, decimalPlaces) {
  const tensMultiplier = 10 ** decimalPlaces;
  return Math.ceil(number * tensMultiplier) / tensMultiplier;
};


export {
  roundTo,
};
