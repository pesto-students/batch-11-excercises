function countingAnagrams(string) {
  const anagram = {};

  const sanitizeString = string.split(' ');
  sanitizeString.forEach((str) => {
    const sorted = str.split('').sort().join('');
    if (!anagram[sorted]) {
      anagram[sorted] = 1;
      return;
    }
    if (anagram[sorted] && sorted.length > 1) {
      anagram[sorted] += 1;
    }
  });
  let count = 0;
  Object.values(anagram).map((key) => {
    if (key > 1) {
      count += 1;
    }
    return count;
  });
  return count;
}

export {
  countingAnagrams,
};
