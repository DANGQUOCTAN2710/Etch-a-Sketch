const gridContainer = document.querySelector('.container');
var isRandomColor = false; 
var gridSize = 16;
var totalCells = gridSize * gridSize;

function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; // Reset color to white
    });
}

function removeGrid(){
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.remove();
    });
}

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Function to create the grid  
function createGrid(gridSize = gridSize) {
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'; // Change color on hover
        });
        
        if(isRandomColor) {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = randomColor(); // Change to random color on hover
            });
        } else {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black'; // Change color on hover
            });
        }
        gridContainer.appendChild(cell);
    }
}

// Event listeners for control buttons
document.querySelector('.reset').addEventListener('click', () => {
    clearGrid();
    removeGrid();
    gridSize = 16; 
    totalCells = gridSize * gridSize; 
    createGrid(gridSize);
});

document.querySelector('.gridSize').addEventListener('click', () => {
    const newSize = prompt("Enter new grid size (1-100):", gridSize);
    if (newSize && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
        gridSize = parseInt(newSize);
        totalCells = gridSize * gridSize; // Update total cells based on new size
        clearGrid();
        removeGrid();
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    clearGrid();
}); 

document.querySelector('.randomColor').addEventListener('click', () => {
    isRandomColor = !isRandomColor;  
    clearGrid();
    removeGrid();
    createGrid(gridSize);
});

document.addEventListener('DOMContentLoaded', createGrid);
