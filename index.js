const container = document.querySelector('#container');

const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
const row4 = document.createElement('div');

row1.classList.add('row');
row2.classList.add('row');
row3.classList.add('row');
row4.classList.add('row');

container.appendChild(row1);
container.appendChild(row2);
container.appendChild(row3);
container.appendChild(row4);