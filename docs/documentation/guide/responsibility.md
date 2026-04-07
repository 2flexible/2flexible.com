import {SimpleGroupExample, BlockGroupExample, PaddingExample, MarginExample, MinsMaxsExample, SimpleLayoutExample, SimpleLayoutWrapExample, SimpleLayoutAlignExample, SimpleLayoutSpaceExample, GridLayoutSpaceExample} from '@site/src/examples/responsibilityExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';


# Responsibility
Blocks key responsibilty comes in the layout block and every block behavier to its child. Some of the properties like `minHeight`,  `maxWidth`, etc. help us to improve responsivness features.  

## Grouping Blocks
Blocks can be added into another blocks as a child block and block can have many child as it likes. For adding child block to its parent you need to cal `addChild` method in parent then pass block as child, **you don't need to additionally add child to canvas**. If you give cordinates (x, y) to child they will be adjust relative to the parent block, these cordinates deafults to 0.

```javascript
const parentBlock = new Reactangle({width: 120, height: 80})

const childBlock = new Reactangle({x: 20, y: 10, width: 120, height: 80})

parentBlock.addChild(childBlock)
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<SimpleGroupExample />
</CanvasBuilder>


Additionally you can group block of elements together with Block constructor itself.

```javascript
const parentBlock = new Block({width: 120, height: 80})

const firstChild = new Reactangle({x: 0, y: 0, width: 30, height: 20})
const secondChild = new Reactangle({x: 50, y: 0, width: 40, height: 50})
const thirdChild = new Reactangle({position: "relative", bottom: 0, width: 40, height: 40})

parentBlock.addChild(firstChild, secondChild, thirdChild)
```
<CanvasBuilder id={"canvas2"} width={600} height={400}>
<BlockGroupExample />
</CanvasBuilder>


## Padding
As the css has padding property, blocks also have padding option you can pass padding parameteres as one `padding` parameter or you can specify which padding you want to apply as `paddingLeft`, `paddingRight` etc. Blocks support variety of units and formats so you can pass padding as `padding: ["10px", "20px"]` or `padding: ["10rem", "20rem"]` or `padding: "10px 20px"` etc. See [Custom units]() for more information.  

:::info

Be reminded that padding only applies to to its childs and its own size

:::


```javascript
const parentBlock = new Reactangle({width: 120, height: 80, padding: [40, 50] })

const childBlock = new Reactangle({x: 20, y: 10, width: 120, height: 80})

parentBlock.addChild(childBlock)
```

You can give paddings as seperate from each other.

```javascript
const parentBlock = new Reactangle({width: 120, height: 80, paddingTop: 40 })
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<PaddingExample />
</CanvasBuilder>


## Margin
Margins also supported in blocks, they behave as much as css margin property. If you apply margin to child blocks they will create a space from its parent or if its parent is canvas they will have space from canvas.

```javascript
const parentBlock = new Reactangle({width: 120, height: 80, marginTop: 40 })

const childBlock = new Reactangle({x: 20, y: 10, width: 120, height: 80, marginLeft: "10rem" })

parentBlock.addChild(childBlock)
```

<CanvasBuilder id={"canvas4"} width={600} height={400}>
<MarginExample />
</CanvasBuilder>


## Mins, Maxs ...
Blocks support some handy min and max sizes for extending its responsiveness. You typically have `minWidth`, `maxWidth`, `minHeight`, `maxHeight` options and they come much more in the help if you use them width [unit parameters]() (px, rem, %, etc.)
And of course these mins and maxs will change to relative parent block or canvas.

So in this example child block width take all width space of its parent and when you resize it will change relative to parent. But resizing of child `width` will stop at the `minWidth`


```javascript
const parentBlock = new Reactangle({width: 120, height: 80})

const childBlock = new Reactangle({width: "100%", minWidth: 30, height: 40})

parentBlock.addChild(childBlock)
```

If you want to adjust how much grow of the child will take in parent block you need to pass `maxWidth`. In this example child will stop grow at 80% of its parent width.

```javascript
const parentBlock = new Reactangle({width: 120, height: 80})

const childBlock = new Reactangle({width: 40, maxWidth: "80%", height: 40})

parentBlock.addChild(childBlock)
```

<CanvasBuilder id={"canvas5"} width={600} height={400}>
<MinsMaxsExample />
</CanvasBuilder>

`minHeight` and `maxHeight` parameters also changes as much as like in the previous examples for width in max and min, but keep in mind that if you want to open real power of the blocks responsivness you need to use them with [unit parameters]().

## Layout Blocks
If you like css layout methods (flexbox, grid) you will like block layout too. Layout block supports grid and flexbox layouts which is in turn behave same as css methods. 

### Flexbox
As you know flexboxe in layout block will work as css flexbox layout method, so you only need to pass `flex` for a `layout` property.

```javascript
const flexboxLayout = new LayoutBlock({layout: "flex", width: 120, height: 80})

const firstChild = new Reactangle({width: 40, height: 40})
const secondChild = new Reactangle({width: 40, height: 40})
const thirdChild = new Reactangle({width: 40, height: 40})

parentBlock.addChild(childBlock)
```

Layout Block in `layout: flex` option support two directons `column` and `row`.

<CanvasBuilder id={"canvas6"} width={600} height={400}>
<SimpleLayoutExample />
</CanvasBuilder>

These layouts also much more responsible to its child, you can pass a `flexWrap` as `wrap` to see how these blocks will wrap in width resizing. 

```javascript
const flexboxLayout = new LayoutBlock({...options, flexWrap: "wrap"})
```
<CanvasBuilder id={"canvas7"} width={600} height={400}>
<SimpleLayoutWrapExample />
</CanvasBuilder>


Much like in css, blocks also supports aligning features (`justifyContent`, `alignItems`, `alignContent`, `justifyItems` *for only grids not works in flex option*), and `gap` etc. If you want to know what other options does layout blocks support see [layout block api]()

```javascript
const verticalAlignment = new LayoutBlock({...options, alignContent: "wrap", alignContent: "center", alignItems: "center"})
const horizontalAlignment = new LayoutBlock({...options, justifyContent: "space-between"})
```

<CanvasBuilder id={"canvas8"} width={600} height={400}>
<SimpleLayoutAlignExample />
</CanvasBuilder>


All of the space options (`margin`, `padding`) also apply to layout blocks. 

```javascript
const flexboxLayout = new LayoutBlock({...options, padding: 40})
const firstChild = new Reactangle({width: "50%", height: "100%", marginTop: 40})
```
<CanvasBuilder id={"canvas9"} width={600} height={400}>
<SimpleLayoutSpaceExample />
</CanvasBuilder>



### Grid
Layout block `grid` option will do the same thing as the css grid method and same aligning and other [layout options]() options will behave same in grid layout. In example above will use `gridTemplateColumns` and `gridTemplateRow` for defining our grid template size for each row and column, in additionally you can use just `gridTemplate` option. 


```javascript
new LayoutBlock({layout: "grid", gridTemplateColumns: [30, 30, 30], gridTemplateRow: [50, 30], width: 120, height: 80})
```
<CanvasBuilder id={"canvas10"} width={600} height={400}>
<GridLayoutSpaceExample />
</CanvasBuilder>
