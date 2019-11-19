function duplicateLetters(string) {
  const letters = string.split("");
  const letterFrequency = {};
  let max = 0;
  letters.forEach(letter => {
    if (!letterFrequency[letter]) {
      letterFrequency[letter] = 1;
    } else {
      letterFrequency[letter] += 1;
    }
  });
  Object.keys(letterFrequency).forEach(key => {
    if (letterFrequency[key] > 1 && letterFrequency[key] > max) {
      max = letterFrequency[key];
    }
  });

  return max ? max : false;
}

export { duplicateLetters };
