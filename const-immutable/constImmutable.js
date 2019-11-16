
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', {
    writable: false,
    configurable: false,
  });
  return account.password;
}

export {
  constImmutable,
};
