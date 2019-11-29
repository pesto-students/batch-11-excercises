
function titleize(stringVal) {
  if(stringVal === ''){
    return '';
  }

  let stringArray = stringVal.split(' ');

  for(let i = 0; i < stringArray.length; i++){

    if(stringArray[i].charCodeAt(0) >= 97 && stringArray[i].charCodeAt(0) <= 122){
      stringArray[i][0] = stringArray[i][0].toUpperCase();
    }
  }
  return stringArray;
}

export {
  titleize,
};
