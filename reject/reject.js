
function reject(predicate, targetObject) {
  const targArray = Object.entries(targetObject);
  const result = targArray.reduce((acc, element) => {
    const [key, value] = element;
    if (!predicate(value)) {
      acc[key] = value;
    }
    return acc;
  }, {});

  return targetObject instanceof Array ? Object.values(result) : result;
}

export {
  reject,
};
