import {SimpleRectangleExample, BorderExample, CustomBorderExample, CustomSingleBorderExample} from '@site/src/examples/rectangleExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Rectangle block
You most commonly see rectanlge block in previus examples, because its a simple shape which is extends from [shape block](). Rectangles comes with a style customizations like `backgroundColor`, `borderColor`, `borderWidth` etc.

```javascript
new Reactangle({width: 120, height: 60, backgroundColor: "black"})
```

<CanvasBuilder id={"canvas1"} width={600} height={400}>
<SimpleRectangleExample />
</CanvasBuilder>

## Border Radius
You can customize borders radius of rectanlge. Border radiuses comes as `[top-left, top-right, bottom-right, bottom-left]` format or you can just a pass one radius for all sides of the broder

```javascript
new Reactangle({...options, borderRadius: [40, 50, 0, 0]})
```
<CanvasBuilder id={"canvas2"} width={600} height={400}>
<BorderExample />
</CanvasBuilder>


## Customizing Borders
Borders is a customizable you can change style, color, width etc.

```javascript
new Reactangle({...options, border: "30px solid white"})
```

<CanvasBuilder id={"canvas3"} width={600} height={400}>
<CustomBorderExample />
</CanvasBuilder>


You can also define which side of the border you want to customize.
```javascript
new Reactangle({...options, borderTop: "30px solid white"})
```

<CanvasBuilder id={"canvas4"} width={600} height={400}>
<CustomSingleBorderExample />
</CanvasBuilder>