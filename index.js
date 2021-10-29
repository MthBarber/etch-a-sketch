//Function to create etch-a-sketch board with divs

let numOfDivs = 256;

for (let i = 0; i < numOfDivs; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.height = '20px';
    newDiv.style.width = '20px';
    newDiv.style.border = '1px black solid';
    newDiv.id = "div"+i;
    container.appendChild(newDiv);
}
