
function mapFilterAndReduce(objects) {
  return objects.map((object) => object.firstName)
    .filter((name) => name.length < 5)
    .reduce((accumulator, name) => {
      accumulator[name] = name.length;
      return accumulator;
    }, {});
}

export {
  mapFilterAndReduce,
};
