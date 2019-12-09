
function slasher(array, numberOfItem) {
  const copiedArray = [...array];
  copiedArray.splice(0, numberOfItem);
  return copiedArray;
}

export {
  slasher,
};
