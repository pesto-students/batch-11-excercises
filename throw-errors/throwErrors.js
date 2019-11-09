function throwErrors() {
  try {
    errorGenerator();
  } catch (error) {
    return error.name;
  }
}

export { throwErrors };
