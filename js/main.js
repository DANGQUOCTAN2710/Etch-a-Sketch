const gridContainer = document.querySelector('.container');

// Set the size of the grid
let gridSize = 16;
let totalCells = gridSize * gridSize;

function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'; // Reset color to white
    });
}


// Function to create the grid  
function createGrid(gridSize) {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.width = `${640 / gridSize}px`; // Set width based on grid size
        cell.style.height = `${640 / gridSize}px`; // Set height based on grid size
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'; // Change color on hover
        });
        
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = 'black'; // Change color on click
        });
        gridContainer.appendChild(cell);
    }
}

// Event listeners for control buttons
document.querySelector('.reset').addEventListener('click', () => {
    clearGrid();
    createGrid(gridSize);
});

document.querySelector('.gridSize').addEventListener('click', () => {
    const newSize = prompt("Enter new grid size (1-100):", gridSize);
    if (newSize && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
        gridSize = parseInt(newSize);
        totalCells = gridSize * gridSize; // Update total cells based on new size
        clearGrid();
        createGrid(gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    clearGrid();
}); 
// Call the function to create the grid when the page loads
document.addEventListener('DOMContentLoaded', createGrid);
