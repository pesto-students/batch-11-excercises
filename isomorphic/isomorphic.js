/* eslint-disable no-console */
function isomorphic(array) {
  let [string1, string2] = [...array];
  string1 = string1.split("");
  string2 = string2.split("");
  const frequency1 = {};
  const frequency2 = {};
  string1.forEach(letter => {
    if (!frequency1[letter]) {
      frequency1[letter] = 1;
    } else {
      frequency1[letter] += 1;
    }
  });

  string2.forEach(letter => {
    if (!frequency2[letter]) {
      frequency2[letter] = 1;
    } else {
      frequency2[letter] += 1;
    }
  });

  const frequencyCount1 = Object.values(frequency1);
  const frequencyCount2 = Object.values(frequency2);
  let flag = true;
  frequencyCount1.forEach((frequency, index) => {
    if (frequency !== frequencyCount2[index]) {
      flag = false;
    }
  });

  return flag;
}

export { isomorphic };
