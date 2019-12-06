function isPalindrome(palinValue) {
  let palinString = palinValue;

  if (typeof palinString === 'number') {
    palinString = palinValue.toString();
  }
  const sanitizedString = palinString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverseString = sanitizedString.split('').reverse().join('');

  return sanitizedString === reverseString;
}


export { isPalindrome };
