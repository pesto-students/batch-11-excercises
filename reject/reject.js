function reject(conditionForRejection, list) {


  if (Array.isArray(list)) {
    const filter = list.filter(conditionForRejection);
    const rejectedArray = [];
    return rejectedArray.concat(list.filter((ele) => filter.indexOf(ele) === -1));
  }
  if (typeof list === 'object') {
    const rejectObject = {};
    if (Object.keys(list).length === 0) {
      return {};
    }
    for (const key in list) {

      if (conditionForRejection(list[key]) === false) {
        rejectObject[key] = list[key];
      }
    }
    return rejectObject;
  }
}

export {
  reject,
};
