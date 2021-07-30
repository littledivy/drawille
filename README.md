
## `drawille`

[HTML5](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) [Canvas](canvas.ts) on the terminal. Based on [drawille](https://github.com/asciimoo/drawille) [implementation](drawille.ts).

https://user-images.githubusercontent.com/34997667/127607186-8eb7ac23-ab00-48ed-a01a-90e5e262f122.mp4

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

