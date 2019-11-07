
function alternatingCharacters(arrayOfString) {
  function countAlterationOfCharacters(unsanitizedString) {
    function predicate(element, index, array) {
      return element !== array[index + 1];
    }
    const sanitizedString = unsanitizedString
      .split('')
      .filter(predicate)
      .join('');

    const count = unsanitizedString.length - sanitizedString.length;
    return count;
  }

  return arrayOfString.map(countAlterationOfCharacters);
}

export {
  alternatingCharacters,
};
