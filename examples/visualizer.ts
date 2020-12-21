// Random noise visualizer. Works on Deno and the browser.
import Canvas from "../canvas.ts";

let canvas = new Canvas(120, 120);
let ctx = canvas.getContext("2d");

let bufferLength = 128;
let dataArray = [];

let WIDTH = canvas.width;
let HEIGHT = canvas.height;

let barWidth = (WIDTH / bufferLength) * 2.5;
let barHeight;
let x = 0;

function renderFrame() {
  // Clear canvas for next frame.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();

  x = 0;
  // Generate random data
  dataArray = [...Array(bufferLength)].map(() =>
    Math.floor(Math.random() * bufferLength)
  );
  for (var i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i];
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  }

  ctx.restore();
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  console.log(ctx.toString());
}

setInterval(renderFrame, 140);
