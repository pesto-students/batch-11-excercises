const createTable = () => {
  const table = document.querySelector("#myTable");
  const rowValue = document.querySelector("#rownum").value;
  const columnValue = document.querySelector("#columnnum").value;
  let tr;

  for (let r = 0; r < rowValue; r += 1) {
    tr = table.insertRow();
    for (let c = 0; c < columnValue; c += 1) {
      const cell1 = tr.insertCell(c);
      cell1.innerHTML = `Row${table.rows.length} cell${c + 1}`;
    }
  }

  table.appendChild(tr);
};
