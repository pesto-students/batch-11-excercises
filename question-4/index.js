const table = document.getElementById('sampleTable');
let rowIndex = 2;

function insertRow() {
  rowIndex += 1;
  const tr = document.createElement('tr');
  let rowData = '';
  for (let columnIndex = 0; columnIndex < 2; columnIndex++) {
    rowData += `<td>Row${rowIndex} cell${columnIndex + 1}</td>`;
  }
  tr.innerHTML = rowData;
  table.appendChild(tr);
}
