let container = document.querySelector(".grid-container");
let rows = document.getElementsByClassName("row");
let cells = document.getElementsByClassName("cell");
console.log(cells)
// Buttons

// Background Button
let bgColorBtn = document.querySelector(".color");
let bgDropPallete = document.querySelector("#bgColorPalette");
// Pen Button
let penColorDiv = document.querySelector(".colorPen");
let penColor = document.querySelector("#penColorPalette");

let randomColorBtn = document.querySelector(".rainbow-button");
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
}, true)

// Random Color button eventlister
randomColorBtn.addEventListener("click", ()=>{    
    if(!randomColorBtn.classList.contains("btn-on")){
        randomColorBtn.classList.add("btn-on");
        console.log("randomColorBtn 'on'");       
    }else{
        randomColorBtn.classList.remove("btn-on");
        console.log("randomColorBtn 'off'")
        
    }  
})   


// pencolor writing both one color and random color

function RandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}; 

container.onmouseover = () =>{
     console.log(!randomColorBtn.classList.contains("btn-on"))
     let cellArray = Array.from(cells);
    if(!randomColorBtn.classList.contains("btn-on") && !eraserBtn.classList.contains("btn-on")){
        console.log(!randomColorBtn.classList.contains("btn-on"));
        cellArray.forEach(cell => {
            cell.addEventListener("mouseover", (e)=>{
            e.stopPropagation();
            e.target.style.backgroundColor = penColor.value;
            })
        });
    }else if(randomColorBtn.classList.contains("btn-on") && !eraserBtn.classList.contains("btn-on")){
        console.log('btn-on is added');
        cellArray.forEach(cell => {
            cell.addEventListener("mouseover", (e)=>{
            e.stopPropagation();
            e.target.style.backgroundColor = RandomColor();
            })
        });
    }else{
        cellArray.forEach(cell => {
            cell.addEventListener("mouseover", (e)=>{
            e.stopPropagation();
            e.target.style.backgroundColor = "white";
            })
        });
    }
    
}
   
      

// Toogle on/off grid line
showGridLine.addEventListener("click", ()=>{
    let flexItems = document.querySelectorAll(".cell")
    if(showGridLine.classList.contains("btn-on")){
        showGridLine.classList.remove("btn-on");
        console.log("grid line is not showing");
       flexItems.forEach(element => {    
        element.classList.remove("grid-line");
        });
    } else{
        showGridLine.classList.add("btn-on");
        console.log("grid line is showing");
        flexItems.forEach(element => {    
        element.classList.add("grid-line");
        });
    }  
})

eraserBtn.addEventListener("click", ()=>{
    if(!eraserBtn.classList.contains("btn-on")){
        eraserBtn.classList.add("btn-on");       
    }else{
        eraserBtn.classList.remove("btn-on")
    }
})




// Clear Button
clearBtn.onclick = () =>{
    // if Grid-line button ellement does not contain class "btn-on", 
    if(!showGridLine.classList.contains("btn-on")){
    clearGrid();
    makeGrid(gridSizeToogle.value, gridSizeToogle.value)
    console.log("Grid cleared while grid-line in 'on'");
    }else{
    clearGrid();
    console.log("Grid cleared while grid-line in 'off'")
    makeGrid(gridSizeToogle.value, gridSizeToogle.value);
    let flexItems = Array.from(document.querySelectorAll(".cell"));
    flexItems.forEach(element => {    
        // Adds "grid-line" class which displays cell border is styled to light-gray.
        element.classList.add("grid-line");
        });
    }   
}

