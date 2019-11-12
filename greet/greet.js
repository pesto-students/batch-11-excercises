function greet(greetingString) {
  return new Promise((resolve) => {
    resolve(`Hey ${greetingString}`);
  });
}

export {
  greet,
};
