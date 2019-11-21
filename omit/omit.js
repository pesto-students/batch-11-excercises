function omit(toOmit, object) {
  const notOmitted = {};
  for (const key in object) {
    if (!toOmit.includes(key)) {
      notOmitted[key] = object[key];
    }
  }
  return notOmitted;
}

export { omit };
