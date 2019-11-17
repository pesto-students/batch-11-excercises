function without(valuesToRemove, array) {
  return array.filter((el) => {
    if (Array.isArray(el)) {
      const filtered = valuesToRemove.filter((filterEl) => filterEl[0] === el[0]);
      if (filtered.length === 0) {
        return true;
      }
      return false;
    }
    if (valuesToRemove.includes(el)) {
      const valueInArray = valuesToRemove.find((findEl) => el === findEl || isNaN(findEl));
      if (Object.is(valueInArray, el) === true) {
        return false;
      }
    }
    return true;
  });
}

export {
  without,
};
