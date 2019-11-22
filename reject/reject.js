const reject = (rejectCondition, list) => {
  const acceptCondition = (arg) => !rejectCondition(arg);
  if (Array.isArray(list)) {
    if (list.length === 0) {
      return [];
    }
    return list.filter((i) => acceptCondition(i));
  }
  if (list.constructor.name === 'Object') {
    const keys = Object.keys(list);
    if (keys.length === 0) {
      return {};
    }
    const values = Object.values(list);
    const filterValues = values.filter((i) => acceptCondition(i));
    const filterList = filterValues.reduce((acc, val) => {
      for (const key of keys) {
        if (list[key] === val) {
          acc[key] = val;
        }
      }
      return acc;
    }, {});
    return filterList;
  }
  return false;
};

export { reject };
