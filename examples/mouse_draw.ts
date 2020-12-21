// NOTE: Autopilot is an --unstable plugin. We're using it for global mouse movement detection.
//       Ideally one would use an ncurses-like library.
import {
  runMousePosition,
  runScreenSize,
} from "https://deno.land/x/autopilot/autopilot_plugin/index.ts";
import Canvas from "../canvas.ts";

let c = new Canvas();
let ctx = c.getContext("2d");

interface Screen {
  width: number;
  height: number;
}

let dimensions: Screen = JSON.parse(await runScreenSize());

interface Point {
  x: number;
  y: number;
}

let m: Point;

setInterval(async () => {
  m = JSON.parse(await runMousePosition());

  let x = (m.x / dimensions.width) * c.width;
  let y = (m.y / dimensions.height) * c.height;
  ctx.fillRect(x, y, 2, 2);
  ctx.stroke();

  console.log(ctx.toString());
}, 90);
