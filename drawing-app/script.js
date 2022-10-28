const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 3;
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

  if(isPressed){
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x, y);
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  // ctx.stroke();
  // ctx.fillStyle = "red";
  ctx.fill();
}

// drawCircle(200,200)

// function draw() {
//   ctx.clearRect(0,0,canvas.width,canvas.height);
//   drawCircle(x++,50);
//   drawCircle(x++,y+=2);
//   requestAnimationFrame(draw);
// }

draw();
