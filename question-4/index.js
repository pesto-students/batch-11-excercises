const insertRow = () => {
  const table = document.querySelector("#sampleTable");
  const newRow = table.insertRow(table.rows.length);
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);
  const newText1 = document.createTextNode(`Row${table.rows.length} Cell1`);
  const newText2 = document.createTextNode(`Row${table.rows.length} Cell2`);
  newCell1.appendChild(newText1);
  newCell2.appendChild(newText2);
};
