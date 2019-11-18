/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const insertRow = () => {
  const table = document.getElementById('targetTable');
  const newRow = table.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = `Row ${table.rows.length - 1}, Cell 1`;
  cell2.innerHTML = `Row ${table.rows.length - 1}, Cell 2`;
};
