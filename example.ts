import Canvas from "./canvas.ts";

let canvas = new Canvas();
let c = canvas.getContext("2d");

var n = 20;
var a = 40;
var t = 2;
var pi = Math.PI;
var pi2 = pi / 2;
var sin = Math.sin;
var cos = Math.cos;

var sunX = canvas.width - 20;
var sunData = c.getImageData(sunX, 1, 15, 20);

function draw() {
  var w = canvas.width / 2;
  var start = performance.now();

  c.clearRect(0, 0, canvas.width, canvas.height);
  c.save();
  c.translate(w, w);
  for (var i = 1; i < n; i++) {
    var r = i * (w / n);
    c.beginPath();
    c.moveTo(-r, 0);
    var tt = start * pi / 1000 / t;
    var p = (sin(tt - pi * (cos(pi * i / n) + 1) / 2) + 1) * pi2;
    for (var j = 0; j < a; j++) {
      var ca = pi * j / (a - i);
      if (p > ca) {
        c.lineTo(-cos(ca) * r, -sin(ca) * r);
      } else {
        c.lineTo(-cos(p) * r, -sin(p) * r);
      }
    }
    c.stroke();
  }
  c.restore();

  c.strokeRect(0, 0, canvas.width, canvas.height);

  sunX = (sunX + 1) % canvas.width;
  c.putImageData(sunData, sunX, 1);

  console.log(c.toString());
}

setInterval(draw, 1000 / 20);
