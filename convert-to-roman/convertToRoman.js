
function convertToRoman(...args) {
  let simpleNum = args[0];
  let romanString = '';
  const romanNumDictionary = {
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
  for (const romanNum in romanNumDictionary) {
    if (Object.prototype.hasOwnProperty.call(romanNumDictionary, romanNum)) {
      while (simpleNum >= romanNumDictionary[romanNum]) {
        romanString += romanNum;
        simpleNum -= romanNumDictionary[romanNum];
      }
    }
  }
  return romanString;
}

export {
  convertToRoman,
};
