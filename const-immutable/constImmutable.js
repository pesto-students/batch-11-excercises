
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', {
    writable: false,
    configurable: false,
  });
  // account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
