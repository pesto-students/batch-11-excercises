const rotatedString = (str1, str2) => {
  const mid = Math.floor(str1.length / 2);
  const temp = ''.concat(str1.slice(mid)).concat(str1.slice(0, mid));
  return temp === str2;
};

export { rotatedString };
