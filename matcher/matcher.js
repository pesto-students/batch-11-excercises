
function matcher(arrayToBeMatched, regexArray, { caseSensitive } = { caseSensitive: true }) {
  let matchedArray = [];
  regexArray.forEach((regex) => {
    matchedArray = arrayToBeMatched.filter(
      (item) => matcher.isMatch(item, regex, { caseSensitive }),
    );
  });
  return matchedArray;
}

matcher.isMatch = (stringToBeMatched, regex, { caseSensitive } = { caseSensitive: true }) => {
  const regexExpression = !caseSensitive ? new RegExp(regex, 'i') : new RegExp(regex);
  console.log(regexExpression, stringToBeMatched.match(regexExpression));
  return Boolean(stringToBeMatched.match(regexExpression));
};

export {
  matcher,
};
