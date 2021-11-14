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

let gridSquares = document.getElementsByClassName('gridSquares');

// Squares change color when mouse hovers square
for (let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].addEventListener('mouseenter', (e) =>{
        gridSquares[i].style.backgroundColor = "black";
    });
}

let restartButton = document.getElementById('restart');

restartButton.addEventListener('click', () => {
   
    

    
    //numOfDivs = prompt("Enter a value to resize the grid");
    
    //setGrid(numOfDivs);
        
});

//function to clear grid when altering grid

