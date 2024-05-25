let resetBtn = document.querySelector(".reset");
let colorPicker = document.querySelector(".color-picker");
let eraserBtn = document.querySelector(".eraser-mode");
let colorBtn = document.querySelector(".color-mode");
let slider = document.querySelector(".slider");
let sliderText = document.querySelector(".slider-text");
const body = document.querySelector("body");
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
const gridTable = document.querySelector(".container-grids");
let a = false;
let b = true;
body.addEventListener("mousedown", () => {
  a = true;
});
body.addEventListener("mouseup", () => {
  a = false;
});
colorBtn.addEventListener("click", () => {
  colorBtn.style.backgroundColor = "crimson";
  eraserBtn.style.backgroundColor = "rgba(112, 27, 240)";
  c = false;
  b = true;
});
eraserBtn.addEventListener("click", () => {
  eraserBtn.style.backgroundColor = "crimson";
  colorBtn.style.backgroundColor = "rgba(112, 27, 240)";
  b = false;
  c = false;
});
function makeGrid(gridValue) {
  for (let i = 0; i < gridValue; i++) {
    for (let j = 0; j < gridValue; j++) {
      let squere = document.createElement("div");
      let heightAndWidth = 500 / gridValue;
      squere.classList.add("squere");
      squere.style.height = `${heightAndWidth}px`;
      squere.style.width = `${heightAndWidth}px`;
      gridTable.append(squere);
      squere.addEventListener("mousedown", () => {
        if (b == true) squere.style.backgroundColor = colorPicker.value;
      });
      squere.addEventListener("mouseover", () => {
        if (b == true) {
          if (a == true) squere.style.backgroundColor = colorPicker.value;
        } else squere.style.backgroundColor = "rgba(112, 27, 240, 0.633)";
      });
    }
  }
}
resetBtn.addEventListener("click", () => {
  while (gridTable.firstChild) gridTable.removeChild(gridTable.firstChild);
  if (slider.value != "") makeGrid(slider.value);
  else makeGrid(16);
});

slider.addEventListener("click", () => {
  sliderText.textContent = slider.value + "x" + slider.value;
  while (gridTable.firstChild) gridTable.removeChild(gridTable.firstChild);
  makeGrid(slider.value);
});
makeGrid(16);
