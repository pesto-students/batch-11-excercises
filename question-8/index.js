const getOptions = () => {
  const dropDown = document.querySelector("#mySelect").selectedValue;
  console.log(dropDown);
  if (dropDown.length > 0) {
    alert(`${dropDown.length}`);
  }
};
