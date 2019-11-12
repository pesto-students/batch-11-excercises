
function timeout(userName) {
  return new Promise(() => setTimeout(() => `Hello ${userName}`, 300));
}

export {
  timeout,
};
