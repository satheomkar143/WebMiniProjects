const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const brushSize = document.getElementById("size");
const colorPicker = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

draw = (e) => {
  console.log(e);
  
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    
    drawLine(x, y, x2, y2);
    x=x2;
    y=y2;
  }
}

canvas.addEventListener("mousemove", draw);

let color = "black";

colorPicker.addEventListener("change", (e) => {
  color = e.target.value;
  // console.log("color = "+color)
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size/2, 0, Math.PI * 2);
  // ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}
// drawCircle(200,200)

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size;
  ctx.strokeStyle = color;
  ctx.stroke();
}
// drawLine(5, 5, 100, 100);

increaseBtn.addEventListener("click", () => {
  size += 2;

  if (size >= 50) {
    size = 50;
  }

  brushSize.innerText = size;
});

decreaseBtn.addEventListener("click", () => {
  size -= 2;

  if (size <= 2) {
    size = 2;
  }

  brushSize.innerText = size;
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

eraserBtn.addEventListener("click", () => { 
  color="white";
  size *=2;
  brushSize.innerText = size;
})


// function draw() {
//   ctx.clearRect(0,0,canvas.width,canvas.height);
//   drawCircle(x++,50);
//   drawCircle(x++,y+=2);
//   requestAnimationFrame(draw);
// }

// draw();
