function createObjectTest(...values) {
  const firstName = values[0],
  const lastName = values[1];

  return {
    fname: firstName,
    lname: lastName
  };
}
export { createObjectTest };
