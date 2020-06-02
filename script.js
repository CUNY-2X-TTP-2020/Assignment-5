let cells = 1;

function createCell(cell, style)
{
    let c = document.createElement("td");
    c.setAttribute('class', style);
    cell.appendChild(c);
}

function addRow()
{
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    grid.appendChild(newRow);

    for(let i = 0; i < cells; i++)
    {
        let cell = document.createElement("td");
        cell.classList.add("grid-column");
        newRow.appendChild(cell);
    }
}

function addColumn()
{
    cells++;
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByClassName("grid-row");

    for(let i = 0; i < rows.length; i++)
    {
        let cell = document.createElement("td");
        cell.classList.add("grid-column");
        rows[i].appendChild(cell);
    }
}

function removeRow()
{
    let grid = document.getElementById("grid");
    let lastRow = grid.rows.length - 1;

    for(let i = lastRow; i > 0; i--)
    {
        grid.deleteRow(i);
    }
}

function removeColumn()
{

}