const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const brushSize = document.getElementById("size");
const colorPicker = document.getElementById("color");

const ctx = canvas.getContext("2d");

let size = 30;
let x = (y = 50);
let isPressed = false;

canvas.addEventListener("mousedown", () => {
  isPressed = true;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
  console.log(e);

  if (isPressed) {
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x, y);
  }
});

let color = "black";

colorPicker.addEventListener("change",(e) => {
  color = e.target.value;
  // console.log("color = "+color)
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  // ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}

increaseBtn.addEventListener("click", () => {
  size += 2;
  
  if (size >= 50) {
    size = 50;
  }

  brushSize.innerText = size;
});

decreaseBtn.addEventListener("click", () => {
  size -= 2;

  if (size <=2) {
    size = 2;
  }

  brushSize.innerText = size;
});

// drawCircle(200,200)

// function draw() {
//   ctx.clearRect(0,0,canvas.width,canvas.height);
//   drawCircle(x++,50);
//   drawCircle(x++,y+=2);
//   requestAnimationFrame(draw);
// }

// draw();
