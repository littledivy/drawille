import Canvas from "../canvas.ts";

let c = new Canvas();
let ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

console.log(ctx.toString());
