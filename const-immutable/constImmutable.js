
function constImmutable() {
  const immutableObject = {
    initialpassword: 'initialPassword',
  };

  Object.freeze(immutableObject);

  return immutableObject.initialpassword;
}

export {
  constImmutable,
};
