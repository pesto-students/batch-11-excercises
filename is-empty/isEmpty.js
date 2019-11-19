function isEmpty(value) {
  if (value === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (
    typeof value === "object" &&
    value !== null &&
    Object.entries(value).length === 0
  ) {
    return true;
  }
  return false;
}

export { isEmpty };
