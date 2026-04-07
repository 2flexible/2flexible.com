import {SimpleTextExample, WrapTextExample, ResizableHeightTextExample, EditableTextExample, StrokeTextExample, CustomTextExample} from '@site/src/examples/textExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Text Block
Text blocks comes with repsonsibilty features like `wrap` option for wrapping text, or can be `editable` insdie native canvas without using
any additional html input tag.

We're gonna creat a text with custom font familiy with font size 80px.
```javascript
new TextBlock("Hello World", {width: 120, height: 60, fontFamily: "KulminoituvaRegular", color: "blue", fontSize: "80px"})
```

<CanvasBuilder id={"canvas1"} width={600} height={400}>
<SimpleTextExample />
</CanvasBuilder>


## Wrap
Text block responsive to any width, height change you can either wrap it for letters or words. 
```javascript
new TextBlock("Hello World", {...options, wrap: "letter" || "word" || "nowrap" })
```


<CanvasBuilder id={"canvas2"} width={600} height={400}>
<WrapTextExample />
</CanvasBuilder>

As you can see in above example how `word`, `letter` and `nowrap` wrap options behave in text block.

## Resizable Height
Default text adjusts height to height of the text block. You can change this behavier by making `resizeLineHeight` option true.
```javascript
new TextBlock("Hello World", {...options, resizeLineHeight: true })
```

<CanvasBuilder id={"canvas3"} width={600} height={400}>
<ResizableHeightTextExample />
</CanvasBuilder>


## Editable
Editable event takes care of the all text editing, additionally you can listen this change by `onEdit` option. 
```javascript
const textBlock = new TextBlock("Hello World", {...options, editable: true, onEdit: callbackEdit })

const callbackEdit = (e) => {
    console.log(textBlock.text())
}
```

<CanvasBuilder id={"canvas4"} width={600} height={400}>
<EditableTextExample />
</CanvasBuilder>


## Stroke
You can customize stroke of text with `strokeWidth`, `strokeColor` etc. options.
```javascript
new TextBlock("Hello World", {...options, strokeWidth: 3, strokeColor: "blue" })
```


<CanvasBuilder id={"canvas5"} width={600} height={400}>
<StrokeTextExample />
</CanvasBuilder>


## More customization
Addtionally you can use canvas context provided featurs for text in text block. See [Shape block api](/docs/api/ShapeBlock) for more information.
```javascript
new TextBlock("Hello World", {...options, fontKerning: "normal", textRendering: "optimizeLegibility", fontStretch: "expanded" })
```


<!-- <CanvasBuilder id={"canvas6"} width={600} height={400}>
<CustomTextExample />
</CanvasBuilder> -->
