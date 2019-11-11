
function lowercaseKeys(unsanitizedObject) {
  const sanitizedObject = {};
  const unsanitizedObjectProperties = Object.getOwnPropertyNames(unsanitizedObject);
  unsanitizedObjectProperties.forEach((property) => {
    sanitizedObject[property.toLocaleLowerCase()] = unsanitizedObject[property];
  });
  return sanitizedObject;
}

export {
  lowercaseKeys,
};
