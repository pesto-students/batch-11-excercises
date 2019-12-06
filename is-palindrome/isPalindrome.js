
function isPalindrome(sentence) {
  return sanitize(sentence).toLowerCase().split('').reverse().join('') === sanitize(sentence).toLowerCase();
}

function sanitize(sentence) {
  if (typeof sentence !== 'string') {
    sentence = String(sentence);
  }
  return sentence.replace(/[\W_]/g, '');
}

export {
  isPalindrome,
};
