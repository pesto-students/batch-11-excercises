
function timeout(string) {
  return new Promise((resolve) => {
    setTimeout(resolve(`Hello ${string}`), 300);
  });
}

export {
  timeout,
};
