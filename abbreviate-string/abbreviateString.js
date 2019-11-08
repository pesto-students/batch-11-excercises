
function abbreviateString(string) {
  if (typeof string !== 'string') {
    throw new Error('The input must be a string');
  }
  const words = string.split(' ');
  const firstName = words[0];
  const lastInitial = words[words.length - 1].split('').splice(0, 1).join('');
  const lastInitialCapitalized = lastInitial.toUpperCase();
  const period = '.';
  const space = ' ';
  return firstName + space + lastInitialCapitalized + period;
}

export {
  abbreviateString,
};
