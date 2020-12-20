import Canvas from "../canvas.ts";

let c = new Canvas();
let ctx = c.getContext("2d");

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

console.log(ctx.toString());
