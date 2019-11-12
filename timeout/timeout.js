
function timeout(name) {
  const timeOutPromise = new Promise((resolve) => {
    setTimeout(() => resolve(`Hello ${name}`), 300);
  });
  return timeOutPromise;
}

export {
  timeout,
};
