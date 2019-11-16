
function rejectPromise() {
  return new Promise((resolve, reject) => {
    reject('REJECTED!');
  });
}

export {
  rejectPromise,
};
