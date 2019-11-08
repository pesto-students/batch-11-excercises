
function abbreviateString(stringToAbbreviate) {
  if (typeof stringToAbbreviate !== 'string') {
    throw Error();
  }
  const spaceSeparated = stringToAbbreviate.split(' ');
  return `${spaceSeparated[0]} ${spaceSeparated[spaceSeparated.length - 1][0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
