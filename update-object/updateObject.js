
const replaceItem = (items, toReplace, replaceWith) => {
  const itemsCopy = [...items];
  itemsCopy.splice(toReplace, 1, replaceWith);
  return itemsCopy;
};

function updateObject(idx, replaceWith, items) {
  if (arguments.length < 3) {
    // eslint-disable-next-line prefer-rest-params
    return (...more) => updateObject(...arguments, ...more);
  }

  const toReplace = idx < 0 ? items.length + idx : idx;
  if (toReplace < 0 || toReplace > items.length - 1) {
    return items;
  }
  return replaceItem(items, toReplace, replaceWith);
}


export {
  updateObject,
};
