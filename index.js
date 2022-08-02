const container = document.querySelector('#container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

// Creates a deafault grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumsn(16);
}

// 