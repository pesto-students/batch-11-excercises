const timeout = (name) => {
  return new Promise((resolve) => {
    setTimeOut(() => {
      resolve(`Hello ${name}`);
    });
  });
};

export { timeout };
