
// eslint-disable-next-line consistent-return
const isPromise = (input) => {
  if (Promise && Promise.resolve(input)) {
    return Promise.resolve(input) === input;
  }
};

export {
  isPromise,
};
