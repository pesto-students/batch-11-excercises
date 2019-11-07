
function truthCheck(objects, propertyToBeChecked) {
  return objects.filter((object) => object[propertyToBeChecked]).length === objects.length;
}

export {
  truthCheck,
};
