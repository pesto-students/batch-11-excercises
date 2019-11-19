const createTable = () => {
  const table = document.querySelector("#myTable");
  const rowIndex = document.querySelector("#row").value;
  const columnIndex = document.querySelector("#column").value;
  const newRow = table.insertRow(table.rows.length);
  const newCell1 = newRow.insertCell(0);
  const newText1 = document.createTextNode(
    `Row-${rowIndex} Column-${columnIndex}`
  );
  newCell1.appendChild(newText1);
};
