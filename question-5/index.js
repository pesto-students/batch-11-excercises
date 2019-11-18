const changeContent = () => {
  const table = document.querySelector("#myTable");
  const rowValue = document.querySelector("#rownum").value - 1;
  const columnValue = document.querySelector("#columnnum").value - 1;
  const stringValue = document.querySelector("#input_text").value;

  table.rows[rowValue].cells[columnValue].innerHTML = stringValue;
};
