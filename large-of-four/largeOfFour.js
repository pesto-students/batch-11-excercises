
function largeOfFour(multipleArrays) {
  const largeOfFourArrays = [];
  for (let i = 0; i < multipleArrays.length; i++) {
    let singleArray = multipleArrays[i];
    singleArray.sort((firstElement, secondElement) => firstElement - secondElement);
    largeOfFourArrays.push(singleArray.pop());
  }
  return largeOfFourArrays;
}

export {
  largeOfFour,
};
