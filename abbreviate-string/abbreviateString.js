function abbreviateString(string) {
  if (typeof string !== 'string') {
    throw new Error(); 
  }
  const splitString = string.split(' ');
  const abbreviateTheString = `${splitString[0]} ${splitString[splitString.length - 1][0].toUpperCase()}.`
  return abbreviateTheString;
}
export {
  abbreviateString,
};
