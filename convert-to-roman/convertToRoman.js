function convertToRoman(number) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let numeral = '';
  let digit = number;
  for (let i = 0; i < decimalValue.length; i += 1) {
    while (decimalValue[i] <= digit) {
      numeral += romanNumeral[i];
      digit -= decimalValue[i];
    }
  }

  return numeral;
}

export {
  convertToRoman,
};
