function cartesianProduct(product1, product2) {
  if (!product1 || !product2) {
    return null;
  }
  return product1.reduce((result, item1) => {
    product2.forEach((item2) => result.push([item1, item2]));
    return result;
  }, []);
}

export {
  cartesianProduct,
};
