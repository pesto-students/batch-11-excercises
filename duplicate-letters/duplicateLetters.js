const duplicateLetters = (string) => {
  const frequenceyStore = {};
  for (const char of string) {
    frequenceyStore[char] = frequenceyStore[char] + 1 || 1;
  }
  let maxDuplicateCount = 1;
  for (const key in frequenceyStore) {
    if (frequenceyStore[key] > maxDuplicateCount) {
      maxDuplicateCount = frequenceyStore[key];
    }
  }
  if (maxDuplicateCount === 1) {
    return false;
  }
  return maxDuplicateCount;
};

export { duplicateLetters };
