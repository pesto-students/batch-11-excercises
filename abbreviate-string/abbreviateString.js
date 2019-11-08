
function abbreviateString(sentence) {
  if (typeof sentence !== 'string') {
    throw new Error('Please provide alphabetical string!')
  }
  const words = sentence.split(' ');
  const firstWord = words[0];
  const lastWordInitials = words[words.length - 1].toUpperCase()[0];
  const abbreviatedString = `${firstWord} ${lastWordInitials}.`;
  return abbreviatedString;
}

export {
  abbreviateString,
};
