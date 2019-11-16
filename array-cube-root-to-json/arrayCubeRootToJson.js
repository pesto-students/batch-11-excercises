function arrayCubeRootToJson(array) {
  if (Array.isArray(array)) {
    const returnJSON = {};
    const cubeRoot = (el) => {
      let element = el;
      if (typeof el === 'string') {
        element = parseInt(el, 10);
      }
      if (typeof element !== 'number' || isNaN(element)) {
        throw Error('Pass a numeric array as argument');
      }
      return Math.cbrt(element);
    };
    for (const el of array) {
      returnJSON[el] = cubeRoot(el);
    }
    return returnJSON;
  }
  throw Error('Pass a numeric array as argument');
}

export {
  arrayCubeRootToJson,
};
