const gridContainer = document.querySelector(".grid-container");

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

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-cell")) {
        e.target.style.backgroundColor = "black";
    }
});