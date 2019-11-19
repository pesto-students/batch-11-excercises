const removeColor = () => {
  const dropDown = document.querySelector("#colorSelect");
  if (dropDown.length > 0) {
    dropDown.remove(dropDown.selectedIndex);
  }
};
