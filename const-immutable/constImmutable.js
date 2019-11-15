
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', {
    writable: false,
  });
  // account.password = 's3cret'; throws TypeError so commented out
  return account.password;
}

export {
  constImmutable,
};
