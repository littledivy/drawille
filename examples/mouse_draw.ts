// NOTE: autopilot is an --unstable plugin. We're using it for global mouse movement detection.
import { init } from "https://deno.land/x/mouse/mod.ts";
import Pilot from "https://deno.land/x/autopilot/mod.ts";
import Canvas from "../canvas.ts";

const canvas = new Canvas();
const ctx = canvas.getContext("2d");

const pilot = new Pilot();
const dimensions = pilot.screenSize();

let isDrawing = true;
let mouseDown = false;

window.addEventListener("click", (e) => {
  // @ts-ignore
  if(e.buttons == 1) isDrawing = !isDrawing;
});

window.addEventListener("mousemove", (e) => {
  if(isDrawing) {
    // @ts-ignore Types for MouseEvent are missing
    let x = (e.screenX / dimensions.width) * canvas.width;
    // @ts-ignore Types for MouseEvent are missing
    let y = (e.screenY / dimensions.height) * canvas.height;
    ctx.fillRect(x, y, 2, 2);
    ctx.stroke();
    console.log(ctx.toString());
  }
});

await init();
