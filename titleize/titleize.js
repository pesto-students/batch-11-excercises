const isAlphabet = (char) => char.search(/[A-Za-z]/) === 0;

function titleize(string) {
  return string.split('')
    .map((char, index) => {
      if (typeof string[index - 1] === 'string' && isAlphabet(string[index - 1]) && isAlphabet(string[index])) {
        return char.toLowerCase();
      }
      return char.toUpperCase();
    })
    .join('');
}

export {
  titleize,
};
