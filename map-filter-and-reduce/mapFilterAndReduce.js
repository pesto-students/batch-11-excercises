/* eslint-disable indent */

function mapFilterAndReduce(arrayObject) {
  return arrayObject
            .filter((x) => x.firstName.length < 5)
            .reduce((object, { firstName }) => {
              return {
                ...object,
                [firstName]: firstName.length,
              };
            }, {});
}

export {
  mapFilterAndReduce,
};
