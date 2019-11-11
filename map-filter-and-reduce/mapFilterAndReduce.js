/* eslint-disable no-param-reassign */
function mapFilterAndReduce(names) {
  const filteredNames = names.filter((name) => name.firstName.length === 4);
  return filteredNames.reduce((object, { firstName }) => {
    object[firstName] = firstName.length;
    return object;
  }, {});
}

export {
  mapFilterAndReduce,
};
