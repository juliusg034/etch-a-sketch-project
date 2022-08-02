const container = document.querySelector('#container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

// Creates a deafault grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNums) {

    // Create rows
    for(let r = 0; r < rowNums; r++){
        let row = document.createElement('div');
        container.appendChild(row).className = "grid-row";
    };
}

function makeColumns(cellNum) {
    for(i = 0; i < rows.length; i++) {
        for(j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            row[j].appendChild(newcell).className = 'cell';
        }
    }
}