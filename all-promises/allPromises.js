/* eslint-disable no-undef */

function allPromises(promises = []) {
  const remainingPromises = [...promises];
  const completedPromises = [];
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then((response) => {
        completedPromises[index] = response;
        remainingPromises.splice(index, 1);
        if (completedPromises.length === promises.length) {
          resolve(completedPromises);
        }
      }).catch((error) => reject(error));
    });
  });
}

// function sequentialAllPromises(promises) {
//   return promises
//     .reduce((accumulator, item) => accumulator
//       .then((resolvedPromisesValues) => Promise.resolve(item)
//         .then((res) => Promise.resolve(resolvedPromisesValues.concat(res)))),
//     Promise.resolve([]));
// }

export {
  allPromises,
};
