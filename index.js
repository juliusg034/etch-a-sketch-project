// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid(rows, cols) {
    makeRows(rows);
    makeColumns(cols);
    const cells = document.querySelector('.cell');
    cells.setAttribute('style', 'min-width: ' , 100/cols);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

defaultGrid(16, 16);