
function truthCheck(objectArray, propertyToBeChecked) {
  return objectArray.filter((object) => object[propertyToBeChecked]).length === objectArray.length;
}

export {
  truthCheck,
};
