
function rejectPromise(input) {
  return new Promise((resolve, reject) => {
    if (input === undefined) {
      resolve('REJECTED!');
    }
    reject(new Error('Resolved'));
  });
}

export {
  rejectPromise,
};
