function duplicateLetters(stringVal) {
  const stringArray = [...stringVal];
  const object = {};
  let count = 1;

  for (let i = 0; i < stringArray.length; i += 1) {
    if (object[stringArray[i]] === undefined) {
      object[stringArray[i]] = 1;
    } else {
      object[stringArray[i]] += 1;
    }
  }
  const countArray = Object.values(object);
  count = Math.max(...countArray);
  return count > 1 ? count : false;
}

export { duplicateLetters };
