
function largeOfFour(largeOfFourArray) {
  
  let finalLargeofFourArray = [];

  for(let i = 0; i < 4; i++){
      let [highestBound] = [...largeOfFourArray[i]].sort((x,y) => {return y-x;});
      finalLargeofFourArray.push(Number([highestBound]));
  }

  return finalLargeofFourArray;
}

export {
  largeOfFour,
};
