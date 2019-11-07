
function rot13(encryptedString) {
  return encryptedString.split('')
    .map(character => {
      const charCode = character.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        let newCharCode = charCode - 13;
        if (newCharCode < 65)
          newCharCode = newCharCode + 26;
        return String.fromCharCode(newCharCode);
      }
      return character;
    })
    .join('');
}

export {
  rot13,
};
