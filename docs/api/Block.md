# Block

Everything in the canvas is a block, you can create your own block by extending the `Block` class.

```javascript
class MyBlock extends Block {
    constructor(options) {
        super(options);
    }
    // you can define your option with methods, the method name will be the same as the option name, and the value will be passed as an argument to the method
    myOption(option) {
        // the value handler takes care of value caching and converting units, you just need to return the value you want to set for this option
        return super.__valueHandler(option, "myOption", default)
    }
}
```
Options can be defined as parameter that passes to the constructor:
```javascript
const block = new Block(options)
```

Or can be defined as a method of the block after constructing your block:

```javascript
block.x(option);
```

## Options
---
### x

X position of block can be defined with `x` parameter. Block position always starts from the top left corner of the canvas.

```javascript
block.x(option)
```

**Option**

* **type** : string | number | undfined
* **default**: 0

**Returns**

* **x** : number | undfined
---
### y
Y position of block can be defined with `y` parameter. Block position always starts from the top left corner of the canvas.

```javascript
block.y(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **y** : number | undfined
---
### width
Width defines block width in canvas.

```javascript
block.width(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **width** : number | undfined
---
### height
Height defines block height in canvas.

```javascript
block.height(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **height** : number | undfined
---
### minWidth
Min width defines minimum resizable width of block in canvas.

```javascript
block.minWidth(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **minWidth** : number | undfined
---
### minHeight
Min height defines minimum resizable height of block in canvas.

```javascript
block.minHeight(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **minHeight** : number | undfined
---
### maxWidth
Max width defines minimum resizable width of block in canvas.

```javascript
block.maxWidth(option)
```

**Option**
* **type** : string | number | undfined
* **default**: width's size

**Returns**
* **maxWidth** : number | undfined
---
### maxHeight
Max height defines minimum resizable height of block in canvas.

```javascript
block.maxHeight(option)
```

**Option**
* **type** : string | number | undfined
* **default**: height's size

**Returns**
* **maxHeight** : number | undfined
---
### position
Position defines how block cordinates will change realtive to parent. Parent can be canvas or block itself.

```javascript
block.position(option)
```

**Option**
* **type** : "relative" | "absolute" | "sticky" | "fixed" | undfined
* **default**: undefined

**Returns**
* **position** : "relative" | "absolute" | "sticky" | "fixed" | undfined
---
### top
Top defines block y cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.top(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **top** : number | undfined
---
### bottom
Bottom defines block y cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.bottom(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **bottom** : number | undfined
---
### left
Left defines block x cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.left(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **left** : number | undfined
---
### right
Right defines block x cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.right(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **right** : number | undfined
---
### selectable
Selectable defines blocks can be selectable. Selectable affects events and block transfomrations (resizable, draggable, rotatable).

```javascript
block.selectable(option)
```

**Option**
* **type** : boolean | undfined
* **default**: false

**Returns**
* **selectable** : boolean | undfined
---
### padding
Padding defines inner space for block.

```javascript
block.padding(option)
```

**Option**
* **type** : [string | number, string | number, string | number, string | number] | undfined
* **default**: []

**Returns**
* **padding** : [number, number, number, number] | undfined
---
### paddingTop
Padding top defines inner space from top for block.

```javascript
block.paddingTop(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **paddingTop** : number | undfined
---
### paddingRight
Padding right defines inner space from right for block.

```javascript
block.paddingRight(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **paddingRight** : number | undfined
---
### paddingBottom
Padding bottom defines inner space from bottom for block.

```javascript
block.paddingBottom(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **paddingBottom** : number | undfined
---
### paddingLeft
Padding left defines inner space from left for block.

```javascript
block.paddingLeft(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **paddingLeft** : number | undfined
---
### margin
Margin defines outter space for block relative to parent. Parent can be canvas or block itself.

```javascript
block.margin(option)
```

**Option**
* **type** : [string | number, string | number, string | number, string | number] | undfined
* **default**: []

**Returns**
* **margin** : [number, number, number, number] | undfined
---
### marginTop
Margin defines outter space from top for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginTop(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **marginTop** : number | undfined
---
### marginRight
Margin defines outter space from right for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginRight(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **marginRight** : number | undfined
---
### marginBottom
Margin defines outter space from bottom for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginBottom(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **marginBottom** : number | undfined
---
### marginLeft
Margin defines outter space from left for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginLeft(option)
```

**Option**
* **type** : string | number | undfined
* **default**: 0

**Returns**
* **marginLeft** : number | undfined
---
### zIndex
Z index defines how block will positioned in canvas. Top element gets higher z index.

```javascript
block.zIndex(option)
```

**Option**
* **type** : number | undfined
* **default**: undefined

**Returns**
* **zIndex** : number | undfined
---
### draggable
Draggable enables blocks drag and drop transformation in canvas.

```javascript
block.draggable(option)
```

**Option**
* **type** : boolean | undfined
* **default**: false

**Returns**
* **draggable** : boolean | undfined
---
### onDrag
On drag takes callback functions which is invoking each time when `draggable` event invokes.

```javascript
block.onDrag(option)
```

**Option**
* **type** : (event: MouseEvent) => void | undfined
* **default**: undefined

**Returns**
* **onDrag** : (event: MouseEvent) => void | undfined
---
### dragX
Drag x enables dragging on x axis.

```javascript
block.dragX(option)
```

**Option**
* **type** : boolean | undfined
* **default**:

**Returns**
* **dragX** : boolean | undfined
---
### dragY
Drag y enables dragging on y axis.

```javascript
block.dragY(option)
```

**Option**
* **type** : boolean | undfined
* **default**:

**Returns**
* **dragY** : boolean | undfined
---
### rotate
Rotate defines rotating in radian on blocks.

```javascript
block.rotate(option)
```

**Option**
* **type** : number | undfined
* **default**: 0

**Returns**
* **rotate** : number | undfined
---
### rotatable
Rotatable enables block rotating transforamtion in canvas.

```javascript
block.rotatable(option)
```

**Option**
* **type** : number | undfined
* **default**: 0

**Returns**
* **rotatable** : number | undfined

---
### onRotate
On rotate takes callback functions which is invoking each time when `rotatable` event invokes.

```javascript
block.onRotate(option)
```

**Option**
* **type** : (event: MouseEvent) => void | undfined
* **default**: undefined

**Returns**
* **onRotate** : (event: MouseEvent) => void | undfined
---
### order
Order defines order of block in LayoutBlocks.

```javascript
block.order(option)
```

**Option**
* **type** : number | undfined
* **default**:

**Returns**
* **order** : number | undfined
---
<!-- ### alignSelf
Align self defines aliging of block for LayoutBlock.

```javascript
block.alignSelf(option)
```

**Option**
* **type** : "normal" | "auto" | "center" | "start" | "end" | "stretch" | "left" | "right"
* **default**:

**Returns**
* **alignSelf** : string
---
### justifySelf
Justify self defines align of block for LayoutBlock.

```javascript
block.justifySelf(option)
```

**Option**
* **type** : "normal" | "auto" | "center" | "start" | "end" | "stretch" | "left" | "right"
* **default**:

**Returns**
* **justifySelf** : string
---
### flexShrink
describtion

```javascript
block.flexShrink(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **flexShrink** : number -->
---
### flexBasis
Flex basis defines the initial size of a flex item along the main axis. 
Implementation based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex-basis

```javascript
block.flexBasis(option)
```

**Option**
* **type** : number | "auto" | undfined
* **default**: "auto"

**Returns**
* **flexBasis** : number | "auto" | undfined
---
<!-- ### flexGrow
describtion

```javascript
block.flexGrow(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **flexGrow** : number
---
### gridRow
describtion

```javascript
block.gridRow(option)
```

**Option**
* **type** : number[]
* **default**:

**Returns**
* **gridRow** : number[]
---
### gridRowStart
describtion

```javascript
block.gridRowStart(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **gridRowStart** : number
---
### gridRowEnd
describtion

```javascript
block.gridRowEnd(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **gridRowEnd** : number
---
### gridColumn
describtion

```javascript
block.gridColumn(option)
```

**Option**
* **type** : number[]
* **default**:

**Returns**
* **gridColumn** : number[]
---
### gridColumnStart
describtion

```javascript
block.gridColumnStart(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **gridColumnStart** : number
---
### gridColumnEnd
describtion

```javascript
block.gridColumnEnd(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **gridColumnEnd** : number
---
### gridArea
describtion

```javascript
block.gridArea(option)
```

**Option**
* **type** : number[] | string
* **default**:

**Returns**
* **gridArea** : number[] | string -->
---
### hotAreaGap
Hot area gap defines gaps between hot lines.

```javascript
block.hotAreaGap(option)
```

**Option**
* **type** : number | undfined
* **default**: 0

**Returns**
* **hotAreaGap** : number | undfined
---
### hotCornerSize
Hot corner size defines size of hot corners

```javascript
block.hotCornerSize(option)
```

**Option**
* **type** : number | undfined
* **default**: 5

**Returns**
* **hotCornerSize** : number | undfined
---
### hotCornerRadius
Hot corner raidus defines raius of hot corners

```javascript
block.hotCornerRadius(option)
```

**Option**
* **type** : number | undfined
* **default**: [0]

**Returns**
* **hotCornerRadius** : number | undfined
---
### hotCornerStrokeWidth
Hot corner stroke width defines stroke width of hot corners

```javascript
block.hotCornerStrokeWidth(option)
```

**Option**
* **type** : number | undfined
* **default**: 0

**Returns**
* **hotCornerStrokeWidth** : number | undfined
---
### hotCornerStrokeColor
Hot corner stroke color defines stroke color of hot corners

```javascript
block.hotCornerStrokeColor(option)
```

**Option**
* **type** : string | undfined
* **default**: "blue"

**Returns**
* **hotCornerStrokeColor** : string | undfined
---
### hotCornerBackgroundColor
Hot corner background color defines background color of hot corners

```javascript
block.hotCornerBackgroundColor(option)
```

**Option**
* **type** : string | undfined
* **default**: "white"

**Returns**
* **hotCornerBackgroundColor** : string | undfined
---
### hotLineStrokeWidth
Hot lines stroke width defines stroke width of hot lines

```javascript
block.hotLineStrokeWidth(option)
```

**Option**
* **type** : number | undfined
* **default**: 1.5

**Returns**
* **hotLineStrokeWidth** : number | undfined
---
### hotLineStrokeColor
Hot lines stroke color defines stroke color of hot lines

```javascript
block.hotLineStrokeColor(option)
```

**Option**
* **type** : string | undfined
* **default**: "blue"

**Returns**
* **hotLineStrokeColor** : string | undfined
---
### rotationTopLeft
Rotation top left enables to rotate from top left hot corner of block.

```javascript
block.rotationTopLeft(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **rotationTopLeft** : boolean | undfined
---
### rotationTopRight
Rotation top right enables to rotate from top right hot corner of block.

```javascript
block.rotationTopRight(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **rotationTopRight** : boolean | undfined
---
### rotationBottomLeft
Rotation bottom left enables to rotate from bottom left hot corner of block.

```javascript
block.rotationBottomLeft(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **rotationBottomLeft** : boolean | undfined
---
### rotationBottomRight
Rotation bottom right enables to rotate from bottom right hot corner of block.

```javascript
block.rotationBottomRight(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **rotationBottomRight** : boolean | undfined
---
### resizeTopLeft
Resize top left enables to resize from top left hot corner of block.

```javascript
block.resizeTopLeft(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeTopLeft** : boolean | undfined
---
### resizeTopRight
Resize top right enables to resize from top right hot corner of block.

```javascript
block.resizeTopRight(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeTopRight** : boolean | undfined
---
### resizeBottomLeft
Resize bottom left enables to resize from bottom left hot corner of block.

```javascript
block.resizeBottomLeft(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeBottomLeft** : boolean | undfined
---
### resizeBottomRight
Resize bottom right enables to resize from bottom right hot corner of block.

```javascript
block.resizeBottomRight(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeBottomRight** : boolean | undfined
---
### resizeTop
Resize top enables to reszie from top hot line of block.

```javascript
block.resizeTop(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeTop** : boolean | undfined
---
### resizeLeft
Resize left enables to reszie from left hot line of block.

```javascript
block.resizeLeft(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeLeft** : boolean | undfined
---
### resizeRight
Resize right enables to reszie from right hot line of block.

```javascript
block.resizeRight(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeRight** : boolean | undfined
---
### resizeBottom
Resize bottom enables to reszie from bottom hot line of block.

```javascript
block.resizeBottom(option)
```

**Option**
* **type** : boolean | undfined
* **default**: true

**Returns**
* **resizeBottom** : boolean | undfined
---
### horizontalFlipResize
Horizontal flip resize enables to resizable event to resize in flip position.

```javascript
block.horizontalFlipResize(option)
```

**Option**
* **type** : boolean | undfined
* **default**: false

**Returns**
* **horizontalFlipResize** : boolean | undfined
---
### verticalFlipResize
Vertical flip resize enables to resizable event to resize in flip position.

```javascript
block.verticalFlipResize(option)
```

**Option**
* **type** : boolean | undfined
* **default**:

**Returns**
* **verticalFlipResize** : boolean | undfined
---
### resizable
Resizable enables block resizing transforamtion in canvas.

```javascript
block.resizable(option)
```

**Option**
* **type** : boolean | undfined
* **default**:

**Returns**
* **resizable** : boolean | undfined
---
### onResize
On resize takes callback functions which is invoking each time when `resizable` event invokes.

```javascript
block.onResize(option)
```

**Option**
* **type** : (event: MouseEvent) => void | undfined
* **default**:

**Returns**
* **onResize** : (event: MouseEvent) => void | undfined
---
### hidden
Hidden enables to hide block and its child blocks in canvas.

```javascript
block.hidden(option)
```

**Option**
* **type** : boolean | undfined
* **default**: false

**Returns**
* **hidden** : boolean | undfined
---
### important
Important overrides current value of options defined in blocks and persist to important values.

```javascript
block.important(options)
```

**Option**
* **type** : BlockOptions | undfined
* **default**: undefined

**Returns**
* **important** : BlockOptions | undfined
---
### rotationCenterX
Rotation center x defines center of rotation in x axis.

```javascript
block.rotationCenterX(option)
```

**Option**
* **type** : string | number | undfined
* **default**:

**Returns**
* **rotationCenterX** : number | undfined
---
### rotationCenterY
Rotation center y defines center of rotation in y axis.

```javascript
block.rotationCenterY(option)
```

**Option**
* **type** : string | number | undfined
* **default**:

**Returns**
* **rotationCenterY** : number | undfined
---
### cornerTopLeft
Corner top left defines top left of corner for blocks.

```javascript
block.cornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }` | undfined
* **default**:

**Returns**
* **cornerTopLeft** : `{ x: number; y: number }` | undfined
---
### cornerTopRight
Corner top right defines top right of corner for blocks.

```javascript
block.cornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }` | undfined
* **default**:

**Returns**
* **cornerTopRight** : `{ x: number; y: number }` | undfined
---
### cornerBottomLeft
Corner bottom left defines bottom left of corner for blocks.

```javascript
block.cornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }` | undfined
* **default**:

**Returns**
* **cornerBottomLeft** : `{ x: number; y: number }` | undfined
---
### cornerBottomRight
Corner bottom right defines bottom right of corner for blocks.

```javascript
block.cornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **cornerBottomRight** : `{ x: number; y: number }`  | undfined
---
### hotCornerTopLeft
Hot corner top left defines top left of hot corner for blocks.

```javascript
block.hotCornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotCornerTopLeft** : `{ x: number; y: number }`  | undfined
---
### hotCornerTopRight
Hot corner top right defines top right of hot corner for blocks.


```javascript
block.hotCornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotCornerTopRight** : `{ x: number; y: number }`  | undfined
---
### hotCornerBottomLeft
Hot corner bottom left defines bottom left of hot corner for blocks.


```javascript
block.hotCornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotCornerBottomLeft** : `{ x: number; y: number }`  | undfined
---
### hotCornerBottomRight
Hot corner bottom right defines bottom right of hot corner for blocks.


```javascript
block.hotCornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotCornerBottomRight** : `{ x: number; y: number }`  | undfined
---
### hotRotCornerTopLeft
Hot rot corner top left defines top left of hot rotation corner for blocks.

```javascript
block.hotRotCornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotRotCornerTopLeft** : `{ x: number; y: number }`  | undfined
---
### hotRotCornerTopRight
Hot rot corner top right defines top right of hot rotation corner for blocks.

```javascript
block.hotRotCornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotRotCornerTopRight** : `{ x: number; y: number }`  | undfined
---
### hotRotCornerBottomLeft
Hot rot corner bottom left defines bottom left of hot rotation corner for blocks.

```javascript
block.hotRotCornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotRotCornerBottomLeft** : `{ x: number; y: number }`  | undfined
---
### hotRotCornerBottomRight
Hot rot corner bottom right defines bottom right of hot rotation corner for blocks.

```javascript
block.hotRotCornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`  | undfined
* **default**:

**Returns**
* **hotRotCornerBottomRight** : `{ x: number; y: number }`  | undfined
---
### hotRotatableAreaTopLeft
Hot rotatable area top left defines top left of hot rotation area for blocks.

```javascript
block.hotRotatableAreaTopLeft(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotRotatableAreaTopLeft** : HotCornerArea  | undfined
---
### hotRotatableAreaTopRight
Hot rotatable area top right defines top right of hot rotation area for blocks.


```javascript
block.hotRotatableAreaTopRight(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotRotatableAreaTopRight** : HotCornerArea  | undfined
---
### hotRotatableAreaBottomLeft
Hot rotatable area bottom left defines bottom left of hot rotation area for blocks.


```javascript
block.hotRotatableAreaBottomLeft(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotRotatableAreaBottomLeft** : HotCornerArea  | undfined
---
### hotRotatableAreaBottomRight
Hot rotatable area bottom right defines bottom right of hot rotation area for blocks.


```javascript
block.hotRotatableAreaBottomRight(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotRotatableAreaBottomRight** : HotCornerArea  | undfined
---
### hotResizableAreaTopLeft
Hot resizable area top left defines top left of hot resizing area for blocks.

```javascript
block.hotResizableAreaTopLeft(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaTopLeft** : HotCornerArea  | undfined
---
### hotResizableAreaTopRight
Hot resizable area top right defines top right of hot resizing area for blocks.


```javascript
block.hotResizableAreaTopRight(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaTopRight** : HotCornerArea  | undfined
---
### hotResizableAreaBottomLeft
Hot resizable area bottom left defines bottom left of hot resizing area for blocks.


```javascript
block.hotResizableAreaBottomLeft(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaBottomLeft** : HotCornerArea  | undfined
---
### hotResizableAreaBottomRight
Hot resizable area bottom right defines bottom right of hot resizing area for blocks.


```javascript
block.hotResizableAreaBottomRight(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaBottomRight** : HotCornerArea  | undfined
---
### hotResizableAreaTop
Hot resizable area top defines top area of hot resizing for blocks.

```javascript
block.hotResizableAreaTop(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaTop** : HotCornerArea  | undfined
---
### hotResizableAreaRight
Hot resizable area right defines right area of hot resizing for blocks.


```javascript
block.hotResizableAreaRight(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaRight** : HotCornerArea  | undfined
---
### hotResizableAreaLeft
Hot resizable area left defines left area of hot resizing for blocks.


```javascript
block.hotResizableAreaLeft(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaLeft** : HotCornerArea  | undfined
---
### hotResizableAreaBottom
Hot resizable area bottom defines bottom area of hot resizing for blocks.

```javascript
block.hotResizableAreaBottom(option)
```

**Option**
* **type** : HotCornerArea  | undfined
* **default**:

**Returns**
* **hotResizableAreaBottom** : HotCornerArea  | undfined

## Methods
### checkInBound

```javascript
block.checkInBound(event)
```

**Parameters**
* **event** : MouseEvent

**Returns**
* **checkInBound** : boolean
---
### invokeChange

```javascript
block.invokeChange()
```

**Parameters**

**Returns**
* **invokeChange** : void
---
### set
```javascript
block.set(options)
```

**Parameters**
* **options**: BlockOptions

**Returns**
* **set** : void
---
### bind
```javascript
block.bind(block, options)
```

**Parameters**
* **block**: Block
* **options**: (keyof IBlockOptions)[]

**Returns**
* **bind** : void
---
### animate

```javascript
block.animate(keyframes, callback)
```

**Parameters**
* **point** : `{ x: number; y: number; path: Path2D | undefined }`

**Returns**
* **animate** : number
---
### animationStart

```javascript
block.animationStart(animationId)
```

**Parameters**
* **animationId** : number

**Returns**
* **animationStart** : void
---
### animate

```javascript
block.animationStop(animationId)
```

**Parameters**
* **animationId** : number

**Returns**
* **animationStop** : void
---
### animationStop

```javascript
block.animate(animationId)
```

**Parameters**
* **animationId** : number

**Returns**
* **animate** : void
---
### animationFinish

```javascript
block.animationFinish(animationId)
```

**Parameters**
* **animationId** : number

**Returns**
* **animationFinish** : void
---
### animationReverse

```javascript
block.animationReverse(animationId)
```

**Parameters**
* **animationId** : number

**Returns**
* **animationReverse** : void
---
### animationDelay

```javascript
block.animationDelay(animationId, value)
```

**Parameters**
* **animationId** : number
* **value**: number

**Returns**
* **animationDelay** : void
---
### animationPlaybackRate

```javascript
block.animationPlaybackRate(animationId, value)
```

**Parameters**
* **animationId** : number
* **value**: number

**Returns**
* **animationPlaybackRate** : void
---
### animationDirection

```javascript
block.animationDirection(animationId, value)
```

**Parameters**
* **animationId** : number
* **value**: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'

**Returns**
* **animationDirection** : void
---
### animationDuration

```javascript
block.animationDuration(animationId, value)
```

**Parameters**
* **animationId** : number
* **value**: number

**Returns**
* **animationDuration** : void
---
### animationIterationStart

```javascript
block.animationIterationStart(animationId, value)
```

**Parameters**
* **animationId** : number
* **value**: number

**Returns**
* **animationIterationStart** : void
---
### animationIterations

```javascript
block.animationIterations(animationId, value)
```

**Parameters**
* **animationId** : number
* **value**: number

**Returns**
* **animationIterations** : void
---
### animationAutoStart

```javascript
block.animationAutoStart(animationId, value)
```

**Parameters**
* **animationId** : number
* **value**: boolean

**Returns**
* **animationAutoStart** : void
---