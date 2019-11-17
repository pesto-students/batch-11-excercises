
function xprod(array1, array2) {
  return array1.reduce((accumulator, item) => {
    const product = array2.map((item2) => [item, item2]);
    return [...accumulator, ...product];
  }, []);
}

export {
  xprod,
};
