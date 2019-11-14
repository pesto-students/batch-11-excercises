
function binarySearch(numberArray,searchElement) {
  let mid = Math.floor(numberArray.length / 2);

  console.log(numberArray[mid], searchElement);
  
  if (numberArray[mid] === searchElement) {
      console.log('match', numberArray[mid], searchElement);
      return mid;
  } else if (numberArray[mid] < searchElement && numberArray.length > 1) {
      console.log('mid lower', numberArray[mid], searchElement);
      return binarySearch(numberArray.splice(mid, Number.MAX_VALUE), searchElement);
  } else if (numberArray[mid] > searchElement && numberArray.length > 1) {
      console.log('mid higher', numberArray[mid], searchElement);
      return binarySearch(numberArray.splice(0, mid), searchElement);
  } else {
      console.log('not here', searchElement);
      return -1;
  }
}
  
export {
  binarySearch,
};
