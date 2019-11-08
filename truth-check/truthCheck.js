
function truthCheck(objects, keyToVerify) {
  let validKeys = 0;
  for (let object of objects) {
    if (object.hasOwnProperty(keyToVerify) && object[keyToVerify]) {
      validKeys++;
    }
  }
  return objects.length === validKeys;
}

export {
  truthCheck,
};
