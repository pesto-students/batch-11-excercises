
function xprod(set1, set2) {
  const cartesianProduct = set1
    .map((itemInSet1) => set2.map((itemInSet2) => [itemInSet1, itemInSet2]))
    .flat();
  return cartesianProduct;
}

export {
  xprod,
};
