
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  // Object.freeze(account);
  /* Object.defineProperty(account, 'password', {
    value: 'initialPassword',
  }); */
  // account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
