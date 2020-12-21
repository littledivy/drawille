## `drawille`

[HTML5](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) [Canvas](canvas.ts) on the terminal. Based on [drawille](https://github.com/asciimoo/drawille) [implementation](drawille.ts).

![](examples/sine.gif)

![](examples/mouse_draw.gif)

### Usage

Take a look at various examples located at [`examples/`](./examples/)

```typescript
import Canvas from "https://deno.land/x/drawille/drawille.ts";

const canvas = new Canvas();
let ctx = ctx.getContext("2d");
// ...
```

> Requires --unstable feature to be enabled for `Deno.consoleSize`.

### License

[MIT license](LICENSE)

