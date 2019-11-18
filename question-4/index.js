const insertRows = () => {
  const table = document.querySelector("#sampleTable");
  const newRow = table.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = `Row${table.rows.length} cell1`;
  cell2.innerHTML = `Row${table.rows.length} cell2`;
};
