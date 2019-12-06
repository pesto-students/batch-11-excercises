
function convertToRoman(decimal) {
  const SYMBOL_TABLE = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'XD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  const baseValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = '';
  while (decimal > 0) {
    let usefulBaseValues = calculateBaseValuesToBeUsed(baseValues, decimal);
    const largestBaseValue = usefulBaseValues[0];
    const romanFrequency = decimal / largestBaseValue;
    let romanLetter = SYMBOL_TABLE[largestBaseValue];
    roman += romanLetter.repeat(romanFrequency);
    decimal = decimal % largestBaseValue;
  }
  return roman;
}

function calculateBaseValuesToBeUsed(baseValues, decimal) {
  return baseValues.filter((baseValue) => decimal >= baseValue);
}

export {
  convertToRoman,
};
