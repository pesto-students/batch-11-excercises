
function abbreviateString(fullString) {
  if (typeof fullString !== 'string') throw new Error('Invalid Input: Input must be of type string');
  const strings = fullString.split(' ');
  return `${strings[0]} ${strings[strings.length - 1][0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
