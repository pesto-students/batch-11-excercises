
const greet = (whom) => new Promise((resolve) => resolve(`Hey ${whom}`)).catch(() => Promise);

export {
  greet,
};
