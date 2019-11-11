function mapFilterAndReduce(arrayOfObjects) {
  const filteredObjects = arrayOfObjects.filter((object) => object.firstName.length === 4);
  return filteredObjects.reduce((object, {
    firstName,
  }) => ({
    ...object,
    [firstName]: firstName.length,
  }), 1);
}

export {
  mapFilterAndReduce,
};
