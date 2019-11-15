
const calculateCartesianProduct = (firstSet, secondSet) => firstSet
  .reduce((resultantSet, firstSetElement) => [
    ...resultantSet,
    ...secondSet
      .map((secondSetElement) => [firstSetElement, secondSetElement]),
  ], []);

const cartesianProduct = (firstSet, secondSet) => {
  if (!(Array.isArray(firstSet) && Array.isArray(secondSet))) {
    return null;
  }
  return calculateCartesianProduct(firstSet, secondSet);
};

export {
  cartesianProduct,
};
