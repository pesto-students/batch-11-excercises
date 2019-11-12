function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.freeze(account);
  try {
    account.password = 's3cret';
  } catch (exception) {
    exception = true;
  }

  return account.password;
}

export {
  constImmutable,
};
