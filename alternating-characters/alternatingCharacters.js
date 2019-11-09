function alternatingCharacters(arrayOfStrings) {
  const resultingArray = [];
  for (let i = 0; i < arrayOfStrings.length; i += 1) {
    let count = 0;
    let stringArray = arrayOfStrings[i].split('');
    let pastCharacter = stringArray[0];
    stringArray = stringArray.filter((item, key) => {
      if (item !== pastCharacter && key !== 0) {
        pastCharacter = item;
        return item;
      }
    });
    count = arrayOfStrings[i].length - [arrayOfStrings[i].charAt(0), ...stringArray].length;
    resultingArray.push(count);
  }
  return resultingArray;
}
export {
  alternatingCharacters,
};
