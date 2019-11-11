
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  const propertyConfiguration = { writable: false };
  Object.defineProperties(account, 'password', propertyConfiguration);
  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
