
function greet(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(`Hey ${name}`);
    }
    reject(new Error('There is no one to greet'));
  });
}

export {
  greet,
};
