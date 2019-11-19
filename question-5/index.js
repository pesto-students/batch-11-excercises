const changeContent = () => {
  const rowIndex = document.querySelector("#row").value;
  const cellIndex = document.querySelector("#cell").value;
  const updateText = document.querySelector("#message").value;
  const table = document.querySelector("#myTable").rows;
  const row = table[rowIndex - 1];
  const cell = row.cells[cellIndex - 1];
  cell.innerHTML = updateText;
};
