
function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      return Promise.resolve();
    }, timeout);
  });
}

export {
  sleep,
};
