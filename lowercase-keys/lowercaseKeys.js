
function lowercaseKeys(anyCaseObject) {
  const lowercaseObject = {};
  Object.keys(anyCaseObject).forEach((key) => {
    lowercaseObject[key.toLowerCase()] = anyCaseObject[key];
  });
  return lowercaseObject;
}

export {
  lowercaseKeys,
};
