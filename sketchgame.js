let container = document.querySelector(".grid-container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");

// Buttons

// Background Button
let bgColorBtn = document.querySelector(".color");
let bgDropPallete = document.querySelector("#bgColorPalette");
// Pen Button
let penColorDiv = document.querySelector(".colorPen");
let penColor = document.querySelector("#penColorPalette");

let rainBowBtn = document.querySelector(".rainbow-button");
let showGridLine = document.querySelector(".grid-line-button");
let eraserBtn = document.querySelector(".eraser-button");
let clearBtn = document.querySelector(".clear-button");

let gridSizeToogle = document.getElementById("range-slider");
let toogleLabel = document.getElementById("display-toogle-size");



let defaultGrid = () => {
    makeRows(16);
    makeColumns(16);
}
let makeGrid = (row, col) => {
    makeRows(row);
    makeColumns(col)
}


let makeRows = (rowCount) => {
    for (let i = 0; i < rowCount; i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
    }
} 

let makeColumns = (columnCount) =>{
    for (let c = 0; c < rows.length; c++){
        for (let j = 0; j < columnCount; j++){
            let column = document.createElement("div");
            rows[c].appendChild(column).className = "cell";
        }
    }
}


let clearGrid = () =>{
    container.innerHTML = "";
};

makeGrid(16, 16)

gridSizeToogle.addEventListener("change", ()=>{
    toogleLabel.innerText = `Grid-Size: ${gridSizeToogle.value} x ${gridSizeToogle.value}`;
    clearGrid();
    makeGrid(gridSizeToogle.value, gridSizeToogle.value)
    console.log(gridSizeToogle.value)
})


// Select sketch pad background
bgColorBtn.addEventListener("click", ()=>{
    bgDropPallete.oninput = ()=>{       
        container.style.backgroundColor = bgDropPallete.value;
    } 
})

// Pen Color event click
// let painting = false;

penColorDiv.onclick = () => {
    penColor.oninput = ()=>{  
        container.onmousedown = (e) =>{
            e.target.style.backgroundColor = penColor.value;
        }
        document.querySelectorAll(".cell").forEach(cell => {
            cell.onmouseenter = (e) =>{
                e.target.style.backgroundColor = penColor.value;
            }
        });

    }
}
    

// Toogle on/off grid line
showGridLine.addEventListener("click", ()=>{
    let flexItems = document.querySelectorAll(".cell")
    if(showGridLine.classList.contains("btn-on")){
        showGridLine.classList.remove("btn-on");
       flexItems.forEach(element => {    
        element.classList.add("grid-line");
        });
    } else{
        showGridLine.classList.add("btn-on");
        flexItems.forEach(element => {    
        element.classList.remove("grid-line");
        });
    }  
})

// Clear Button
clearBtn.onclick = () =>{
    if(showGridLine.classList.contains("btn-on")){
    clearGrid();
    makeGrid(gridSizeToogle.value, gridSizeToogle.value)
    console.log("i am clicked")
    }else{
    clearGrid();
    makeGrid(gridSizeToogle.value, gridSizeToogle.value);
    let flexItems = Array.from(document.querySelectorAll(".cell"));
    flexItems.forEach(element => {    
        element.classList.add("grid-line");
        });
    }

}





console.log(cells)
console.log(showGridLine)
