function mapFilterAndReduce(array) {
  return array.filter((element) => element.firstName.length < 5)
    .map((element) => {
      const obj = {};
      obj[element.firstName] = element.firstName.length;
      return obj;
    }).reduce((returnObject, currentValue) => {
      returnObject[Object.keys(currentValue)[0]] = currentValue[Object.keys(currentValue)[0]];
      return returnObject;
    }, {});
}

export {
  mapFilterAndReduce,
};
