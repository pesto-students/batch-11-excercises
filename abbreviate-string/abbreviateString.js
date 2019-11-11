
const firstWord = (words) => words[0];
const lastWord = (words) => words[words.length - 1];
const capitalizeFirstLetter = (word) => word.split('')[0].toUpperCase();
const words = (string) => string.split(' ');
const isNotString = (input) => typeof input !== 'string';
const abbreviateString = (maybeString) => {
  if (isNotString(maybeString)) {
    throw new Error(`Expected a string. Got ${typeof maybeString}`);
  }
  return `${firstWord(words(maybeString))} ${capitalizeFirstLetter(lastWord(words(maybeString)))}.`;
};

export {
  abbreviateString,
};
