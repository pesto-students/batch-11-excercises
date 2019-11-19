function xprod(array1, array2) {
  return array1.reduce((acc, el1) => {
    array2.map((el2) => acc.push([el1, el2]));
    return acc;
  }, []);
}

export {
  xprod,
};
