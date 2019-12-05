
function everyNth(dirtyString, step) {
  const characters = dirtyString.split('');
  return characters.filter((character, index) => {
    if (index % step === 0) {
      return character;
    }
    return '';
  }).join('');
}

export {
  everyNth,
};
