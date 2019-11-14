
function binarySearch(numberArray, searchElement) {
  let low = 0;
  let high = numberArray.length - 1;
  let mid = Math.floor((low + high) / 2);
  console.log(mid);

  if (numberArray.length === 0) {
    return -1;
  }
  if (searchElement === numberArray[mid]) {
    return numberArray.indexOf(searchElement);
  }

  if(searchElement > numberArray[low]) {
    low = mid + 1;
    binarySearch(numberArray.slice(low), searchElement);
  }else{
    high = mid - 1;
    binarySearch(numberArray.slice(low, high + 1), searchElement);
  }
}

export {
  binarySearch,
};
