// Data Field
const gridContainer = document.querySelector(".grid-container");
const createGridButton = document.querySelector(".create-grid-button");

// Event Listeners
gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-cell")) {
        e.target.style.backgroundColor = "black";
    }
});

createGridButton.addEventListener("click", () => {
    let gridSize = Number(prompt("What size grid shall I create for thee? (1-40)"));
    if (gridSize < 1 || gridSize > 40 || !Number.isInteger(gridSize)) {
        alert("This is not a valid dimension! Please enter a number 1-40!");
    }
    else {
        gridContainer.innerHTML = "";
        const newGridContainer = document.querySelector(".grid-container");
        for (let i = 0; i < gridSize; i++) {
            let newInnerDiv = document.createElement("div");
            newInnerDiv.classList.add("inner-div");
            for (let j = 0; j < gridSize; j++) {
                let gridCell = document.createElement("div");
                gridCell.classList.add("grid-cell");
                newInnerDiv.appendChild(gridCell);
            }
            newGridContainer.appendChild(newInnerDiv);
        }
        gridContainer.replaceWith(newGridContainer);
    }
});

// Code
for (let i = 0; i < 16; i++) {
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    for (let j = 0; j < 16; j++) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        innerDiv.appendChild(gridCell);
    }
    gridContainer.appendChild(innerDiv);
}

