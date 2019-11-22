
const objectFilter = (obj, compliment) => {
  const objKeys = obj.keys();
  const filteredObj = {};
  objKeys.forEach((key) => {
    if (compliment(obj[key])) {
      filteredObj[key] = obj[key];
    }
  });
  return filteredObj;
};

function reject(transformer, obj) {
  const compliment = (value) => !transformer(value);
  if (Array.isArray(obj)) {
    return obj.filter(compliment);
  }
  return objectFilter(obj, compliment);
}

export {
  reject,
};
