const isNumber = (item) => typeof parseInt(item, 10) === 'number';

function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) {
    throw new Error('String lengths are not equal');
  }
  let diff = 0;
  [...str1].forEach((letter1, idx) => {
    const letter2 = str2[idx];
    if (!isNumber(letter1) && !isNumber(letter2)) {
      if (parseInt(letter1, 10) !== parseInt(letter2, 10)) {
        diff += 1;
      }
    } else if (letter1 !== letter2) {
      diff += 1;
    }
  });
  return diff;
}

export {
  hammingDistance,
};
