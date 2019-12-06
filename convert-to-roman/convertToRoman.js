function convertToRoman(number) {
  const romanDictionary = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumber = '';
  let numberCopy = number;

  for (const i of Object.keys(romanDictionary)) {
    while (numberCopy >= romanDictionary[i]) {
      romanNumber += i;
      numberCopy -= romanDictionary[i];
    }
  }
  return romanNumber;
}

export { convertToRoman };
