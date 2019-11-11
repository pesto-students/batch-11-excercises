
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  const config = { writable: false };
  Object.defineProperty(account, 'password', config);
  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
