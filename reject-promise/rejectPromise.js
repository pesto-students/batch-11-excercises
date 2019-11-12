/* eslint-disable prefer-promise-reject-errors */

function rejectPromise() {
  return Promise.reject('REJECTED!');
}

export {
  rejectPromise,
};
