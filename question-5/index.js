const changeContent = (rowIndex, cellIndex, updateText) => {
  const table = document.querySelector("#myTable").rows;
  const row = table[rowIndex - 1];
  const cell = row.cells[cellIndex - 1];
  cell.innerHTML = updateText;
};
