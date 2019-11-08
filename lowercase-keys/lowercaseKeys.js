
function lowercaseKeys(map) {
  var mapWithLowerCasekeys = {};

  Object.keys(map).forEach((key) => {
    mapWithLowerCasekeys[key.toLocaleLowerCase()] = map[key];
  });

  return mapWithLowerCasekeys;
}

export {
  lowercaseKeys,
};
