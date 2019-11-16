
function timeout(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    }, 300);
  });
}

export {
  timeout,
};
