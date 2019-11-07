
function repeatStringNumTimes(StringValue,repeatationTimes) {

  let repetitiveStringArray;

  if(repeatationTimes < 0){
    return '';
  }else{
    repetitiveStringArray = new Array(repeatationTimes).fill(StringValue).join('');
  }

  return repetitiveStringArray;
}

export {
  repeatStringNumTimes,
};
