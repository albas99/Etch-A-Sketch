let divsContainer = document.querySelector('.divs-container');

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function createDivGrid(rows, columns) {
    divsContainer.style.setProperty('--grid-rows', rows);
    divsContainer.style.setProperty('--grid-columns', columns);

    for (let i = 0; i < (rows * columns); i++){
        let divs = document.createElement('div');
        divs.setAttribute('class', 'divs');
        divsContainer.appendChild(divs);
    }
}

createDivGrid(16, 16);