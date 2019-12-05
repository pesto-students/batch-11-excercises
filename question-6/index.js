const submit = document.getElementById('createTable');
const inputValues = document.getElementById('rowsColumns');
const emptyTable = document.getElementById('myTable');

const createTable = (rows, columns) => {
    let tableContent = '';
    for (let i = 0; i < rows; i++) {
        let col = '';
        for (let j = 0; j < columns; j++) {
            col += `<td>Row-${i} Column-${j}</td>`;
        }
        tableContent += `<tr>${col}</tr>`;
    }
    emptyTable.innerHTML = tableContent;
}

submit.addEventListener('click', () => {
    const [rows, columns] = inputValues.value.split(',').map((digit) => parseInt(digit));
    createTable(rows, columns);
});