
function unnest(nest) {
  let nestedArray = nest;
  if (!Array.isArray(nestedArray)) {
    nestedArray = Array.from(nest);
  }
  return nestedArray.reduce((flattened, item) => {
    if (Array.isArray(item)) {
      flattened.push(...item);
    } else {
      flattened.push(item);
    }
    return flattened;
  }, []);
}

export {
  unnest,
};
