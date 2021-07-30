import Canvas from "../canvas.ts";

let c = new Canvas();
let ctx = c.getContext("2d");
let w = c.width;
let h = c.height / 2;
let f = 2;

function calcSineY(x: number) {
  return h - h * Math.sin(x * 2 * Math.PI * (f / w));
}

function drawSine(x: number) {
  ctx.clear();
  ctx.clearRect(0, 0, w, h * 2);

  ctx.beginPath();
  ctx.moveTo(0, h);
  ctx.lineTo(w, h);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, h);

  for (var i = 0; i < x; i++) {
    let y = calcSineY(x);
    ctx.moveTo(i, y);
    ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.beginPath();
  for (var i = 0; i < x; i++) {
    let y = calcSineY(x);
    ctx.moveTo(x, h);
    ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.beginPath();

  for (var i = 0; i < x; i++) {
    if (i / 3 == Math.round(i / 3)) {
      let y = calcSineY(i);
      ctx.moveTo(i, h);
      ctx.lineTo(i, y);
    }
  }
  ctx.stroke();

  ctx.beginPath();

  for (var i = 0; i < x; i++) {
    let y = calcSineY(i);
    ctx.lineTo(i, y);
  }
  ctx.stroke();
  console.log(ctx.toString());
}

let x = 0;
let interval = setInterval(function () {
  drawSine(x);
  x++;
  if (x > w) x = 0;
}, 20);
