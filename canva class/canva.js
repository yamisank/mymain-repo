const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");


window.addEventListener('mousemove', function(event) {


})

function Circle(x, y, dx, dy, R) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.R = R;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.R, 0, Math.PI * 2, false);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "";
    ctx.stroke();
    // ctx.fill();
  };

  this.update = () => {
    if (this.x + this.R > innerWidth || this.x - this.R < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.R > innerHeight || this.y - this.R < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}


var circleArray = []

for (var i = 0; i < 100; i++) {
  var R = 40;
  var x = Math.random() * (innerWidth - R * 2) + R;
  var y = Math.random() * (innerHeight - R * 2) + R;
  var dx = (Math.random() - 0.5) * 1.5 ;
  var dy = (Math.random() - 0.5) * 1.5 ;

  circleArray.push(new Circle(x, y, dx, dy, R)); 
}


function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }  
  
}
animate();






















// document.onload  = draw()

//   const imm = document.getElementById("imm");

// let r = Math.floor(Math.random() * 255);
// let g = Math.floor(Math.random() * 255);
// let b = Math.floor(Math.random() * 255);

// for (let i = 0; i < 1; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;

//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);

//   ctx.beginPath();
//   ctx.arc(x, y, 50, 0, 2 * Math.PI);
//   ctx.fillStyle = `rgb(${r}, ${g}, ${b} )`;
//   ctx.fill();

//   console.log(r, g, b);
// }

// ctx.beginPath();
// ctx.rect(0, 0, 150, 50);
// ctx.strokeStyle = `rgb(${r}, ${g}, ${b} )`;
// ctx.strokeRect(0, 0, 150, 50);

// ctx.drawImage(imm, 200, 250)

// let grd = ctx.createLinearGradient(0, 0, 200, 0)

// grd.addColorStop(1, "black")
// grd.addColorStop(0, "fuchsia")

// ctx.fillStyle = grd
// ctx.fillRect(30,30, 190, 40)

// ctx.beginPath();
// // ctx.arc(300,300,50,0,2 * Math.PI)

// ctx.moveTo(25, 20);
// ctx.lineTo(100, 150);
// ctx.lineTo(20, 300);
// ctx.lineTo(300, 150);
// ctx.lineTo(25, 20);
// ctx.stroke();

// ctx.beginPath()
// ctx.arc(25,20, 20, 0.5, 0.3 * Math.PI, true)
// ctx.stroke()

//   ctx.fillStyle = "red";
//   ctx.fillRect(Math.random() * 700, Math.random() * 700, 100, 100);
//   window.requestAnimationFrame(draw);
// }
