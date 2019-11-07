
function dropElements(numberArray,DropElement) {

  const FilteredArray = numberArray.filter(DropElement);
  return FilteredArray;
}
  

export {
  dropElements,
};
