
function omit(blackListedKeys, obj) {
  const resultMap = {};
  for (const key in obj) {
    if (!blackListedKeys.includes(key)) {
      resultMap[key] = obj[key];
    }
  }

  return resultMap;
}

export {
  omit,
};
