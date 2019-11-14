
function type(element) {
  if (element === null) return 'Null';
  if (element === undefined) return 'Undefined';
  return element.constructor.name;
}
export {
  type,
};
