
const calculateCartesianProduct = (firstSet, secondSet) => {
  const result = [];
  for (const elementOfFirstSet of firstSet) {
    for (const elementOfSecondSet of secondSet) {
      result.push([elementOfFirstSet, elementOfSecondSet]);
    }
  }
  return result;
};

const cartesianProduct = (firstSet, secondSet) => {
  if (!(Array.isArray(firstSet) && Array.isArray(secondSet))) {
    return null;
  }
  return calculateCartesianProduct(firstSet, secondSet);
};

export {
  cartesianProduct,
};
