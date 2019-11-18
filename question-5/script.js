/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const isEmpty = (element) => !element || element.length === 0;
const changeContent = () => {
  const table = document.getElementById('myTable');
  const requestedRowNumber = document.getElementById('rowValue').value;
  const requestedColumnNumber = document.getElementById('columnValue').value;
  const newValue = document.getElementById('replaceValue').value;
  const currentRowNumber = table.rows.length - 1;
  if (isEmpty(requestedRowNumber) || isEmpty(requestedColumnNumber) || isEmpty(newValue)) {
    alert('Invalid or Empty Value is provided in either column number of cell number or in replacement value');
    return undefined;
  }

  if (requestedRowNumber > currentRowNumber) {
    alert('Provided row number is greater than current row number');
  }
  if (requestedColumnNumber > table.rows[currentRowNumber].cells.length) {
    alert('Provided column number is greater than current cell number');
  }
  table.rows[requestedRowNumber - 1].cells[requestedColumnNumber - 1].innerHTML = newValue;
  return undefined;
};
