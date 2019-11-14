
function mapFilterAndReduce(nameObjects) {
  const BoundForLengthOfName = 5;
  const predicate = (person) => person.firstName.length < BoundForLengthOfName;
  const objectify = (result, person) => {
    const personObject = result;
    personObject[person.firstName] = person.firstName.length;
    return personObject;
  };
  return nameObjects
    .filter(predicate)
    .reduce(objectify, {});
}

export {
  mapFilterAndReduce,
};
