let cells = 1;

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

}

function removeRow()
{

}

function removeColumn()
{

}