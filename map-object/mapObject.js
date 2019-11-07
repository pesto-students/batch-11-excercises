
function mapObject(inputMap,transformInput) {
  var transformedMap = {}

  Object.keys(inputMap).forEach(key=>{
    transformedMap[key] = transformInput(inputMap[key])
  });

  return transformedMap;
}

export {
  mapObject,
};
