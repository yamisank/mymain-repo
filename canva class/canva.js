const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

function draw() {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 100);
  ctx.lineTo(20, 300);
  ctx.lineTo(200, 50);
  
  ctx.stroke();

  //   ctx.fillStyle = "red";
  //   ctx.fillRect(Math.random() * 700, Math.random() * 700, 100, 100);
  //   window.requestAnimationFrame(draw);
}
