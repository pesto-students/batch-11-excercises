function updateInventory(currentInventory, freshInventory) {
  for (let i = 0; i < freshInventory.length; i++) {
    let isUpdated = false;
    let freshInventoryName = freshInventory[i][1];
    let freshInventoryQuantity = freshInventory[i][0];

    for (let j = 0; j < currentInventory.length; j++) {
      let currentInventoryName = currentInventory[j][1];
      let currentInventoryQuantity = currentInventory[j][0];

      if (freshInventoryName === currentInventoryName) {
        currentInventory[j][0] =
          currentInventoryQuantity + freshInventoryQuantity;
        isUpdated = true;
      }
    }
    if (!isUpdated) {
      currentInventory.push(freshInventory[i]);
    }
  }
  return sortingInventory(currentInventory);
}
function sortingInventory(inventory) {
  return inventory.sort((inventoryA, inventoryB) => {
    let firstElement = inventoryA[1].charAt(0).toUpperCase();
    let secondElement = inventoryB[1].charAt(0).toUpperCase();

    if (firstElement < secondElement) {
      return -1;
    }

    if (firstElement > secondElement) {
      return 1;
    }

    return 0;
  });
}

export { updateInventory };
