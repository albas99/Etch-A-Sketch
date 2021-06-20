let divsContainer = document.querySelector('.divs-container');
let resetButton = document.querySelector('.reset');
let selectGridButton = document.querySelector('.select-grid');
let removeBordersButton = document.querySelector('.remove-borders');
window.addEventListener('load', createDivGrid(16, 16));


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

        divs.addEventListener('mouseover', function () {
            divs.style.backgroundColor =
                "rgb(" +
                random(0, 255) +
                "," +
                random(0, 255) +
                "," +
                random(0, 255) +
                ")";
        });
    }

}

function selectGridSize(selectGrid) {
    selectGrid = prompt("Enter Grid Size");
    if (selectGrid < 2 || selectGrid > 100) {
        alert('Please select a number between 2 and 100');
        selectGridSize();
    }
    else {
        let rows = selectGrid;
        let columns = selectGrid;
        clearGrid();
        createDivGrid(rows, columns);
        
    }
}

function clearGrid() {
    let divs = Array.from(divsContainer.childNodes);
    divs.forEach((element) => {
        divsContainer.removeChild(element);
    });
}

function resetColor() {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = 'white');
}

function toggleBorders() {
    let divs = Array.from(divsContainer.childNodes);
    divs.forEach((div) => {
        if (div.style.border === 'none') {
            div.style.border = '1px solid black';
        }
        else {
            div.style.border = 'none';
        }
    });
}



// resetColor()
selectGridButton.addEventListener('click', selectGridSize);
resetButton.addEventListener('click', resetColor);
removeBordersButton.addEventListener('click', toggleBorders);
