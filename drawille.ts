import { Buffer } from "https://deno.land/std/node/buffer.ts";

const map = [
  [0x1, 0x8],
  [0x2, 0x10],
  [0x4, 0x20],
  [0x40, 0x80],
];

class Canvas {
  private _width: number = 0;
  private _height: number = 0;

  public content: Buffer;
  constructor(width?: number, height?: number) {
    // XXX(UNSTABLE): This is a Deno unstable feature.
    let { columns, rows } = Deno.consoleSize(Deno.stdout.rid);
    this.width = width || columns * 2 - 2;
    this.height = height || rows * 4;
    this.content = Buffer.alloc((this.width * this.height) / 8);
  }

  set width(width: number) {
    this._width = Math.floor(width / 2) * 2;
    this.content = Buffer.alloc((this.width * this.height) / 8);
    this.clear();
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  set height(height: number) {
    this._height = Math.floor(height / 4) * 4;
    this.content = Buffer.alloc((this.width * this.height) / 8);
    this.clear();
  }

  clear() {
    this.content.fill(0);
  }

  frame(delimiter: string = "\n"): string {
    const frameWidth = this.width / 2;
    const result = this.content.reduce(
      (acc: string[], cur: number, i: number) => {
        if (i % frameWidth === 0) {
          acc.push(delimiter);
        }
        acc.push(cur ? String.fromCharCode(0x2800 + cur) : " ");
        return acc;
      },
      [],
    );
    result.push(delimiter);
    return result.join("");
  }

  set(x: number, y: number) {
    if (!(x >= 0 && x < this.width && y >= 0 && y < this.height)) {
      return;
    }
    x = Math.floor(x);
    y = Math.floor(y);
    const nx = Math.floor(x / 2);
    const ny = Math.floor(y / 4);
    const coord = nx + (this.width / 2) * ny;
    const mask = map[y % 4][x % 2];
    this.content[coord] |= mask;
  }

  unset(x: number, y: number) {
    if (!(x >= 0 && x < this.width && y >= 0 && y < this.height)) {
      return;
    }
    x = Math.floor(x);
    y = Math.floor(y);
    const nx = Math.floor(x / 2);
    const ny = Math.floor(y / 4);
    const coord = nx + (this.width / 2) * ny;
    const mask = map[y % 4][x % 2];
    this.content[coord] &= ~mask;
  }

  toggle(x: number, y: number) {
    if (!(x >= 0 && x < this.width && y >= 0 && y < this.height)) {
      return;
    }
    x = Math.floor(x);
    y = Math.floor(y);
    const nx = Math.floor(x / 2);
    const ny = Math.floor(y / 4);
    const coord = nx + (this.width / 2) * ny;
    const mask = map[y % 4][x % 2];
    this.content[coord] ^= mask;
  }
}

export default Canvas;
