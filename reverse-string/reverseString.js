
function reverseString(OriginalString) {

  let ReverseString = [];

  let SplittedStringArray = OriginalString.split('');

  for(let i = SplittedStringArray.length - 1; i >= 0;i--){
          ReverseString.push(SplittedStringArray[i]);
  }
    return ReverseString.join('');
}

export {
  reverseString,
};
