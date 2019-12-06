
function rotatedString(firstString, secondString) {
  if (firstString.length === secondString.length
    && typeof firstString === 'string'
    && typeof secondString === 'string') {
    let selfConcatenatedString = [...firstString].join('');
    for (let i = 0; i < firstString.length; i++) {
      selfConcatenatedString += firstString[i];
    }
    return selfConcatenatedString.includes(secondString);
  }
  return false;
}

export {
  rotatedString,
};
