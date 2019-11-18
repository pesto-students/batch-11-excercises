
function sleep(sleepTime) {
  return new Promise((resolve) => {
    setTimeout(resolve, sleepTime);
  });
}

export {
  sleep,
};
