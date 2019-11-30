const isAlphabet = (char) => char.search(/[A-Za-z]/) === 0;

function titleize(stringVal) {

  const stringArray = stringVal.split('').map((word,index) => {
    if(typeof stringVal[index - 1] === 'string' && isAlphabet(stringVal[index - 1]) && isAlphabet(stringVal[index])) {
      return word.toLowerCase();
    }
    return word.toUpperCase();
  }).join('');

  return stringArray;
}

export {
  titleize,
};