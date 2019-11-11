
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  const keyConfiguration = { writable: false };
  Object.defineProperty(account, 'password', keyConfiguration);
  try {
    account.password = 's3cret';
  } catch (error) {
    console.log(error.name, error.message);
  }
  return account.password;
}

export {
  constImmutable,
};
