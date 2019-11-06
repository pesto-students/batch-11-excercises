function reverseString(string) {
  let character;
  let storeCharacter = [];
  for (let i = 0; i < string.length; i++) {
    character = string[i];
    storeCharacter.unshift(character);
  }
  let reversedString = storeCharacter.join("");
  return reversedString;
}

export { reverseString };
