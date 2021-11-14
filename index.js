let container = document.getElementById('container');

//Function to create etch-a-sketch board with divs

let numOfDivs = 16;
//Creates the grid
function setGrid(numOfDivs) {
    for (let i = 0; i < numOfDivs; i++){
        let newRow = document.createElement('div')
        newRow.className = "row";
        container.appendChild(newRow);
        for (let j = 0; j < numOfDivs; j++) {
            let newDiv = document.createElement('div');
            newDiv.style.border = '1px black solid';
            newDiv.id = "div" + j;
            newDiv.className = "gridSquares";
            newRow.appendChild(newDiv);
        }
    }
}
//First call to make the intitial grid when the page opens
setGrid(numOfDivs);
// define gridsquares so they can be called by a function
let gridSquares = document.getElementsByClassName('gridSquares');

// define rows so they can be called by a function
let rows = document.getElementsByClassName('row');

// Squares change color when mouse hovers square
function highlightSquares() {
    for (let i = 0; i < gridSquares.length; i++) {
        gridSquares[i].addEventListener('mouseenter', (e) =>{
            gridSquares[i].style.backgroundColor = "black";
        });
    }
}

highlightSquares();
//add button event listeners
let restartButton = document.getElementById('restart');

restartButton.addEventListener('click', () => {
   
    removeGrid(rows);

    
    createGrid();
    removeGrid(rows);
    setGrid(numOfDivs);
    highlightSquares();
        
});

//function to clear grid when altering grid
function removeGrid(){
    while (rows.length > 0) {
        rows[0].parentNode.removeChild(rows[0]);
    }
}

//create function to create new grid as we need to limit grid size to 64 x 64

function createGrid() {
    numOfDivs = prompt("Enter a value to resize the grid");
    if (numOfDivs > 64) {
        numOfDivs = prompt("Grid cannot exceed 64 x 64, please enter a value to resize the grid");
    }else {
        setGrid(numOfDivs);
    }  
}