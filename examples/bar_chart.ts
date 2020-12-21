// Static bar chart example. Works on Deno & Browser.
import Canvas from "../canvas.ts";

let myCanvas = new Canvas();
let ctx = myCanvas.getContext("2d");

function drawLine(
  ctx: Canvas,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

function drawBar(
  ctx: Canvas,
  upperLeftCornerX: number,
  upperLeftCornerY: number,
  width: number,
  height: number,
) {
  ctx.save();
  ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
  ctx.restore();
}

// Random data to plot
const data = [
  1,
  8,
  1,
  5,
  4,
  8,
  7,
  2,
  5,
  4,
  2,
  2,
  9,
  7,
  0,
  0,
  9,
  6,
  8,
  1,
  0,
  3,
  4,
  6,
  8,
  3,
  4,
  3,
  8,
  1,
  3,
  6,
  6,
  7,
  5,
  5,
  7,
  7,
  5,
  0,
  7,
  9,
  0,
  6,
  9,
  6,
  5,
  8,
  6,
  8,
  6,
  8,
  9,
  1,
  8,
  7,
  5,
  5,
  9,
  5,
  8,
  9,
  0,
  4,
  4,
  7,
  7,
  5,
  5,
  0,
  7,
  9,
  7,
  2,
  2,
  5,
  7,
  9,
  8,
  7,
  1,
  7,
  2,
  6,
  0,
  0,
  1,
  3,
  2,
  4,
  3,
  4,
  5,
  3,
  2,
  7,
  9,
  4,
  6,
  8,
  5,
  9,
  5,
  6,
  0,
  3,
  8,
  0,
  1,
  0,
  4,
  5,
  4,
  5,
  7,
  3,
  8,
  0,
  3,
  1,
  6,
  2,
  4,
  9,
  3,
  2,
  2,
  2,
  9,
  3,
  2,
  8,
  0,
];

let padding = 10;

function draw() {
  var maxValue = 0;
  for (var categ in data) {
    maxValue = Math.max(maxValue, data[categ]);
  }
  var canvasActualHeight = ctx.height - padding * 2;
  var canvasActualWidth = ctx.width - padding * 2;

  var barIndex = 0;
  var numberOfBars = Object.keys(data).length;
  var barSize = (canvasActualWidth) / numberOfBars;

  for (categ in data) {
    var val = data[categ];
    var barHeight = Math.round(canvasActualHeight * val / maxValue);
    drawBar(
      ctx,
      padding + barIndex * barSize,
      ctx.height - barHeight - padding,
      barSize,
      barHeight,
    );

    barIndex++;
  }

  ctx.save();
  console.log(ctx.toString());
}

draw();
