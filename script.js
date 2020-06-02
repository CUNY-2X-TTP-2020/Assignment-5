let cells = 1;
let currentColor = "gray";

function changeColor()
{
    this.style.backgroundColor = currentColor;
}

function createCell(className)
{
    let cell = document.createElement("td");
    cell.classList.add(className);
    cell.addEventListener("click", changeColor);
    return cell;
}

function addRow()
{
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");
    newRow.classList.add("grid-row");
    grid.appendChild(newRow);

    for(let i = 0; i < cells; i++)
    {
        newRow.appendChild(createCell("grid-column"));
    }
}

function addColumn()
{
    cells++;
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByClassName("grid-row");

    for(let i = 0; i < rows.length; i++)
    {
        rows[i].appendChild(createCell("grid-column"));
    }
}

function removeRows()
{
    let grid = document.getElementById("grid");
    let lastRow = grid.rows.length - 1;

    for(let i = lastRow; i > 0; i--)
    {
        grid.deleteRow(i);
    }
}

function removeColumns()
{
    cells = 1;
    let grid = document.getElementById("grid");
    let lastColumn = grid.rows[0].cells.length - 1;

    for(let i = 0; i < grid.rows.length; i++)
    {
        for(let j = lastColumn; j > 0; j--)
        {
            grid.rows[i].deleteCell(j);
        }
    }
}