
function valuesIn(obj) {
  const resultArray = [];
  for (const prop in obj) {
      resultArray.push(obj[prop]);
  }
  return resultArray;
}

export {
  valuesIn,
};
