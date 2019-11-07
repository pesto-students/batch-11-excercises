
function mapObject(...args) {
  const [numbers, action] = args;
  const mappedObject = {};
  for (const key in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, key)) {
      mappedObject[key] = action(numbers[key]);
    }
  }
  return mappedObject;
}

export {
  mapObject,
};
