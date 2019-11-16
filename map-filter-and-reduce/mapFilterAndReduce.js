
function mapFilterAndReduce(array) {
  const getName = nameObj => nameObj.firstName;
  const predicate = name => name.length < 5;
  const createNameObj = (obj, name) => ({ [name]: name.length, ...obj });
  return array.map(getName).filter(predicate).reduce(createNameObj, {});
}

export {
  mapFilterAndReduce,
};
