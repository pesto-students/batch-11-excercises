
function slasher(list, itemsToSlash) {
  let slashCount = itemsToSlash;
  while (slashCount) {
    list.splice(0, 1);
    slashCount -= 1;
  }
  return list;
}

export {
  slasher,
};
