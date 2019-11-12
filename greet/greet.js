
function greet(greetings) {
  return new Promise((resolve, reject) => {
    resolve(`Hey ${greetings}`);
  });
}

export {
  greet,
};
