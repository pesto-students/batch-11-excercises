const longestWordInString = (string) => {
  const splitString = string.split(' ');
  let temp = 0;
  splitString.forEach((i) => {
    temp = Math.max(temp, i.length);
  });
  return temp;
};

export { longestWordInString };
