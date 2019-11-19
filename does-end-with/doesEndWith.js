function checkIfSubList(list, subList) {
  if (list[list.length - 1] === subList[0]) {
    return true;
  }
  return false;
}

function doesEndWith(belongsToSource, source) {
  if (Array.isArray(source)) {
    return checkIfSubList(source, belongsToSource);
  }
  return checkIfSubList(source.split(""), belongsToSource);
}

export { doesEndWith };
