function alternatingCharacters(patternArray) {

  const removedCountsArray = [] ;

  patternArray.forEach(element => {

    const characters = element.split('');
    let removedCharacterCount = 0;

    for(let i = 0; i <= characters.length - 1; i++){
      if(characters[i] === characters[i+1]){
        removedCharacterCount += 1;
      }
    }
    removedCountsArray.push(removedCharacterCount);
  });
    return removedCountsArray;
}

export {
  alternatingCharacters,
};
