
function rejectPromise() {
  return new Promise((resolve, reject) => {
    reject(new Error('REJECTED!'));
  });
}

export {
  rejectPromise,
};
