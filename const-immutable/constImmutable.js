
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', {
    writable: false,
  });
  // account.password = 's3cret';
  // Will cause TypeError: Cannot assign to read only property 'password'...
  return account.password;
}

export {
  constImmutable,
};
