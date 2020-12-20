// Bresenham's Line Algorithm https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
// hand ported to Typescript from https://github.com/madbence/node-bresenham
// MIT License (c) 2014 Bence Dányi 
// MIT License (c) 2020 Divy Srivastava

/**
* Custom function to create a point from known points
**/
export type RecvFn = (x: number, y: number) => void;

/**
* Represents a point.
**/
export interface Point {
 // The abscissa.
 x: number;
 // The ordinate.
 y: number;
}

/**
* Bresenham's Line Drawing algorithm.
**/
export default function(x0: number, y0: number, x1: number, y1: number, fn?: RecvFn): Point[] {
  if(!fn) {
    var arr = [];
    fn = function(x, y) { arr.push({ x: x, y: y }); };
  }
  var dx = x1 - x0;
  var dy = y1 - y0;
  var adx = Math.abs(dx);
  var ady = Math.abs(dy);
  var eps = 0;
  var sx = dx > 0 ? 1 : -1;
  var sy = dy > 0 ? 1 : -1;
  if(adx > ady) {
    for(var x = x0, y = y0; sx < 0 ? x >= x1 : x <= x1; x += sx) {
      fn(x, y);
      eps += ady;
      if((eps<<1) >= adx) {
        y += sy;
        eps -= adx;
      }
    }
  } else {
    for(var x = x0, y = y0; sy < 0 ? y >= y1 : y <= y1; y += sy) {
      fn(x, y);
      eps += adx;
      if((eps<<1) >= ady) {
        x += sx;
        eps -= ady;
      }
    }
  }
  return arr || [];
};
