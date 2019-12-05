/* eslint-disable arrow-body-style */

function mapFilterAndReduce(names) {
  const filteredNames = names.filter((name) => name.firstName.length === 4);
  return filteredNames.reduce((object, { firstName }) => {
    return {
      ...object,
      [firstName]: firstName.length,
    };
  }, {});
}

export {
  mapFilterAndReduce,
};
