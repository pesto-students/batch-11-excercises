
function largeOfFour(largeOfFourArray) {
  const finalLargeofFourArray = [];

  for (let i = 0; i < 4; i++) {
    const [highestBound] = [...largeOfFourArray[i]].sort((x, y) => {return y - x; });
    finalLargeofFourArray.push(Number([highestBound]));
  }

  return finalLargeofFourArray;
}

export {
  largeOfFour,
};
