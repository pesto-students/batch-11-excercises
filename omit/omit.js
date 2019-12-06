
function omit(omitList, object) {
  const omittedObject = {};
  for (const key in object) {
    if (!omitList.includes(key)) {
      omittedObject[key] = object[key];
    }
  }
  return omittedObject;
}

export {
  omit,
};
