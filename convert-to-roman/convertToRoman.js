
const getRomanMapping = () => ({
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  2000: 'MM',
  3000: 'MMM',
});

function convertToRoman(number) {
  const numberMapping = getRomanMapping();
  let divisor = 1;
  while (Math.floor(number / divisor) > 0) {
    divisor *= 10;
  }
  divisor /= 10;
  let divident = number;
  let romanNumber = '';
  while (Math.floor(divident / divisor) !== 0 || divident % divisor !== 0) {
    const quotient = Math.floor(divident / divisor);
    const remainder = divident % divisor;
    if (numberMapping[quotient * divisor]) {
      romanNumber += numberMapping[quotient * divisor];
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < quotient; i++) {
        romanNumber += numberMapping[divisor];
      }
    }
    divident = remainder;
    divisor /= 10;
  }

  return romanNumber;
}

export {
  convertToRoman,
};
