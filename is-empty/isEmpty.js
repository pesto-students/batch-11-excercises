function isEmpty(args) {
  if (args === "") {
    return true;
  }

  if (Array.isArray(args) && args.length === 0) {
    return true;
  }

  if (
    typeof args === "object" &&
    args !== null &&
    Object.entries(args).length === 0
  ) {
    return true;
  }
  return false;
}

export { isEmpty };
