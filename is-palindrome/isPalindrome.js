const isPalindrome = (value) => {
  let str = value.toString();
  str = str.toLowerCase();
  const reg = /[\W_]/g;
  str = str.replace(reg, '');
  const reverseStr = str
    .split('')
    .reverse()
    .join('');
  return reverseStr === str;
};

export { isPalindrome };
