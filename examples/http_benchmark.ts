import Canvas from "../canvas.ts";

let start: number, end: number;
let canvas = new Canvas();
let ctx = canvas.getContext("2d");

let dataArray: number[] = [];

let WIDTH = canvas.width;
let HEIGHT = canvas.height;

let barWidth = WIDTH * 2.5;
let barHeight;
let x = 0;

async function renderFrame() {
  // Clear canvas for next frame.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  barWidth = (WIDTH / dataArray.length) * 2.5;
  x = 0;
  start = Date.now();
  await fetch("https://google.com");
  end = Date.now();
  dataArray.push(end - start);
  for (var i = 0; i < dataArray.length; i++) {
    barHeight = dataArray[i] / 10;
    ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  }
  console.log(ctx.toString());
  console.log(`Response time: ${end - start} ms`);
}

setInterval(renderFrame, 1000);
