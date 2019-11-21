function omit(toOmit, object) {
  const omitted = {};
  for (const key in object) {
    if (!toOmit.includes(key)) {
      omitted[key] = object[key];
    }
  }
  return omitted;
}

export { omit };
