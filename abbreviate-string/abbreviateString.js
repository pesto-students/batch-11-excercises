
function abbreviateString(string) {
  if (typeof string !== 'string') {
    throw new Error('The input must be a string');
  }
  const words = string.split(' ');
  const firstName = words[0];
  const lastNameInitialCapitalized = words[words.length - 1][0].toUpperCase();
  const period = '.';
  const space = ' ';
  return firstName + space + lastNameInitialCapitalized + period;
}

export {
  abbreviateString,
};
