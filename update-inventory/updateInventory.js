
function updateInventory(oldInventory, newInventory) {
  newInventory.forEach((newinventory) => {
    const item = newinventory[1];
    const quantity = newinventory[0];
    let found = false;
    oldInventory.forEach((oldinventory) => {
      if (item === oldinventory[1]) {
        oldinventory[0] += quantity;
        found = true;
      }
    });
    if (!found) {
      oldInventory.push(newinventory);
    }
  });
  // return oldInventory.sort((arr1, arr2) => arr1[1].localeCompare(arr2[1]));
  return oldInventory.sort((arr1, arr2) => {
    if (arr1[1] > arr2[1]) return 1;
    if (arr1[1] < arr2[1]) return -1;
    return 0;
  });
}

export {
  updateInventory,
};
