
function rotatedString(stringA, stringB) {
  if (!stringA || !stringB) {
    return false;
  }
  if (stringA.length !== stringB.length) {
    return false;
  }
  return (stringA + stringA).includes(stringB);
}

export {
  rotatedString,
};
