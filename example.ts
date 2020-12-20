import Canvas from "./canvas.ts";

let canvas = new Canvas(160, 160);
let c = canvas.getContext("2d");

var w = canvas.width / 2;
c.fillRect(-100, -100, canvas.width, canvas.height);
c.save();
c.translate(w, w);
c.stroke();
console.log(c.toString());
