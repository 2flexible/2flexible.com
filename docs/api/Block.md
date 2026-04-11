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

* **type** : string | number
* **default**: 0

**Returns**

* **x** : number
---
### y
Y position of block can be defined with `y` parameter. Block position always starts from the top left corner of the canvas.

```javascript
block.y(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **y** : number
---
### width
Width defines block width in canvas.

```javascript
block.width(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **width** : number
---
### height
Height defines block height in canvas.

```javascript
block.height(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **height** : number
---
### minWidth
Min width defines minimum resizable width of block in canvas.

```javascript
block.minWidth(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **minWidth** : number
---
### minHeight
Min height defines minimum resizable height of block in canvas.

```javascript
block.minHeight(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **minHeight** : number
---
### maxWidth
Max width defines minimum resizable width of block in canvas.

```javascript
block.maxWidth(option)
```

**Option**
* **type** : string | number
* **default**: width's size

**Returns**
* **maxWidth** : number
---
### maxHeight
Max height defines minimum resizable height of block in canvas.

```javascript
block.maxHeight(option)
```

**Option**
* **type** : string | number
* **default**: height's size

**Returns**
* **maxHeight** : number
---
### position
Position defines how block cordinates will change realtive to parent. Parent can be canvas or block itself.

```javascript
block.position(option)
```

**Option**
* **type** : "relative" | "absolute" | "sticky" | "fixed"
* **default**: undefined

**Returns**
* **position** : "relative" | "absolute" | "sticky" | "fixed"
---
### top
Top defines block y cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.top(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **top** : number
---
### bottom
Bottom defines block y cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.bottom(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **bottom** : number
---
### left
Left defines block x cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.left(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **left** : number
---
### right
Right defines block x cordinate relative to parent block. Parent can be canvas or block itself.

```javascript
block.right(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **right** : number
---
### selectable
Selectable defines blocks can be selectable. Selectable affects events and block transfomrations (resizable, draggable, rotatable).

```javascript
block.selectable(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **selectable** : boolean
---
### padding
Padding defines inner space for block.

```javascript
block.padding(option)
```

**Option**
* **type** : [string | number, string | number, string | number, string | number]
* **default**: []

**Returns**
* **padding** : [number, number, number, number]
---
### paddingTop
Padding top defines inner space from top for block.

```javascript
block.paddingTop(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **paddingTop** : number
---
### paddingRight
Padding right defines inner space from right for block.

```javascript
block.paddingRight(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **paddingRight** : number
---
### paddingBottom
Padding bottom defines inner space from bottom for block.

```javascript
block.paddingBottom(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **paddingBottom** : number
---
### paddingLeft
Padding left defines inner space from left for block.

```javascript
block.paddingLeft(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **paddingLeft** : number
---
### margin
Margin defines outter space for block relative to parent. Parent can be canvas or block itself.

```javascript
block.margin(option)
```

**Option**
* **type** : [string | number, string | number, string | number, string | number]
* **default**: []

**Returns**
* **margin** : [number, number, number, number]
---
### marginTop
Margin defines outter space from top for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginTop(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **marginTop** : number
---
### marginRight
Margin defines outter space from right for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginRight(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **marginRight** : number
---
### marginBottom
Margin defines outter space from bottom for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginBottom(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **marginBottom** : number
---
### marginLeft
Margin defines outter space from left for block relative to parent. Parent can be canvas or block itself.

```javascript
block.marginLeft(option)
```

**Option**
* **type** : string | number
* **default**: 0

**Returns**
* **marginLeft** : number
---
### zIndex
Z index defines how block will positioned in canvas. Top element gets higher z index.

```javascript
block.zIndex(option)
```

**Option**
* **type** : number
* **default**: undefined

**Returns**
* **zIndex** : number
---
### draggable
Draggable enables blocks drag and drop transformation in canvas.

```javascript
block.draggable(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **draggable** : boolean
---
### onDrag
On drag takes callback functions which is invoking each time when `draggable` event invokes.

```javascript
block.onDrag(option)
```

**Option**
* **type** : (event: MouseEvent) => void
* **default**: undefined

**Returns**
* **onDrag** : (event: MouseEvent) => void
---
### dragX
Drag x enables dragging on x axis.

```javascript
block.dragX(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **dragX** : boolean
---
### dragY
Drag y enables dragging on y axis.

```javascript
block.dragY(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **dragY** : boolean
---
### rotate
Rotate defines rotating in radian on blocks.

```javascript
block.rotate(option)
```

**Option**
* **type** : number
* **default**: 0

**Returns**
* **rotate** : number
---
### rotatable
Rotatable enables block rotating transforamtion in canvas.

```javascript
block.rotatable(option)
```

**Option**
* **type** : number
* **default**: 0

**Returns**
* **rotatable** : number

---
### onRotate
On rotate takes callback functions which is invoking each time when `rotatable` event invokes.

```javascript
block.onRotate(option)
```

**Option**
* **type** : (event: MouseEvent) => void
* **default**: undefined

**Returns**
* **onRotate** : (event: MouseEvent) => void
---
### order
Order defines order of block in LayoutBlocks.

```javascript
block.order(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **order** : number
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
* **type** : number | "auto"
* **default**: "auto"

**Returns**
* **flexBasis** : number | "auto"
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
* **type** : number
* **default**: 0

**Returns**
* **hotAreaGap** : number
---
### hotCornerSize
Hot corner size defines size of hot corners

```javascript
block.hotCornerSize(option)
```

**Option**
* **type** : number
* **default**: 5

**Returns**
* **hotCornerSize** : number
---
### hotCornerRadius
Hot corner raidus defines raius of hot corners

```javascript
block.hotCornerRadius(option)
```

**Option**
* **type** : number
* **default**: [0]

**Returns**
* **hotCornerRadius** : number
---
### hotCornerStrokeWidth
Hot corner stroke width defines stroke width of hot corners

```javascript
block.hotCornerStrokeWidth(option)
```

**Option**
* **type** : number
* **default**: 0

**Returns**
* **hotCornerStrokeWidth** : number
---
### hotCornerStrokeColor
Hot corner stroke color defines stroke color of hot corners

```javascript
block.hotCornerStrokeColor(option)
```

**Option**
* **type** : string
* **default**: "blue"

**Returns**
* **hotCornerStrokeColor** : string
---
### hotCornerBackgroundColor
Hot corner background color defines background color of hot corners

```javascript
block.hotCornerBackgroundColor(option)
```

**Option**
* **type** : string
* **default**: "white"

**Returns**
* **hotCornerBackgroundColor** : string
---
### hotLineStrokeWidth
Hot lines stroke width defines stroke width of hot lines

```javascript
block.hotLineStrokeWidth(option)
```

**Option**
* **type** : number
* **default**: 1.5

**Returns**
* **hotLineStrokeWidth** : number
---
### hotLineStrokeColor
Hot lines stroke color defines stroke color of hot lines

```javascript
block.hotLineStrokeColor(option)
```

**Option**
* **type** : string
* **default**: "blue"

**Returns**
* **hotLineStrokeColor** : string
---
### rotationTopLeft
Rotation top left enables to rotate from top left hot corner of block.

```javascript
block.rotationTopLeft(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **rotationTopLeft** : boolean
---
### rotationTopRight
Rotation top right enables to rotate from top right hot corner of block.

```javascript
block.rotationTopRight(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **rotationTopRight** : boolean
---
### rotationBottomLeft
Rotation bottom left enables to rotate from bottom left hot corner of block.

```javascript
block.rotationBottomLeft(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **rotationBottomLeft** : boolean
---
### rotationBottomRight
Rotation bottom right enables to rotate from bottom right hot corner of block.

```javascript
block.rotationBottomRight(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **rotationBottomRight** : boolean
---
### resizeTopLeft
Resize top left enables to resize from top left hot corner of block.

```javascript
block.resizeTopLeft(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeTopLeft** : boolean
---
### resizeTopRight
Resize top right enables to resize from top right hot corner of block.

```javascript
block.resizeTopRight(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeTopRight** : boolean
---
### resizeBottomLeft
Resize bottom left enables to resize from bottom left hot corner of block.

```javascript
block.resizeBottomLeft(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeBottomLeft** : boolean
---
### resizeBottomRight
Resize bottom right enables to resize from bottom right hot corner of block.

```javascript
block.resizeBottomRight(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeBottomRight** : boolean
---
### resizeTop
Resize top enables to reszie from top hot line of block.

```javascript
block.resizeTop(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeTop** : boolean
---
### resizeLeft
Resize left enables to reszie from left hot line of block.

```javascript
block.resizeLeft(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeLeft** : boolean
---
### resizeRight
Resize right enables to reszie from right hot line of block.

```javascript
block.resizeRight(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeRight** : boolean
---
### resizeBottom
Resize bottom enables to reszie from bottom hot line of block.

```javascript
block.resizeBottom(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **resizeBottom** : boolean
---
### horizontalFlipResize
Horizontal flip resize enables to resizable event to resize in flip position.

```javascript
block.horizontalFlipResize(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **horizontalFlipResize** : boolean
---
### verticalFlipResize
Vertical flip resize enables to resizable event to resize in flip position.

```javascript
block.verticalFlipResize(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **verticalFlipResize** : boolean
---
### resizable
Resizable enables block resizing transforamtion in canvas.

```javascript
block.resizable(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizable** : boolean
---
### onResize
On resize takes callback functions which is invoking each time when `resizable` event invokes.

```javascript
block.onResize(option)
```

**Option**
* **type** : (event: MouseEvent) => void
* **default**:

**Returns**
* **onResize** : (event: MouseEvent) => void
---
### hidden
Hidden enables to hide block and its child blocks in canvas.

```javascript
block.hidden(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **hidden** : boolean
---
### important
Important overrides current value of options defined in blocks and persist to important values.

```javascript
block.important(options)
```

**Option**
* **type** : BlockOptions
* **default**: undefined

**Returns**
* **important** : BlockOptions
---
### rotationCenterX
Rotation center x defines center of rotation in x axis.

```javascript
block.rotationCenterX(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **rotationCenterX** : number
---
### rotationCenterY
Rotation center y defines center of rotation in y axis.

```javascript
block.rotationCenterY(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **rotationCenterY** : number
---
### cornerTopLeft
Corner top left defines top left of corner for blocks.

```javascript
block.cornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerTopLeft** : `{ x: number; y: number }`
---
### cornerTopRight
Corner top right defines top right of corner for blocks.

```javascript
block.cornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerTopRight** : `{ x: number; y: number }`
---
### cornerBottomLeft
Corner bottom left defines bottom left of corner for blocks.

```javascript
block.cornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerBottomLeft** : `{ x: number; y: number }`
---
### cornerBottomRight
Corner bottom right defines bottom right of corner for blocks.

```javascript
block.cornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerBottomRight** : `{ x: number; y: number }`
---
### hotCornerTopLeft
Hot corner top left defines top left of hot corner for blocks.

```javascript
block.hotCornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerTopLeft** : `{ x: number; y: number }`
---
### hotCornerTopRight
Hot corner top right defines top right of hot corner for blocks.


```javascript
block.hotCornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerTopRight** : `{ x: number; y: number }`
---
### hotCornerBottomLeft
Hot corner bottom left defines bottom left of hot corner for blocks.


```javascript
block.hotCornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerBottomLeft** : `{ x: number; y: number }`
---
### hotCornerBottomRight
Hot corner bottom right defines bottom right of hot corner for blocks.


```javascript
block.hotCornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerBottomRight** : `{ x: number; y: number }`
---
### hotRotCornerTopLeft
Hot rot corner top left defines top left of hot rotation corner for blocks.

```javascript
block.hotRotCornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerTopLeft** : `{ x: number; y: number }`
---
### hotRotCornerTopRight
Hot rot corner top right defines top right of hot rotation corner for blocks.

```javascript
block.hotRotCornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerTopRight** : `{ x: number; y: number }`
---
### hotRotCornerBottomLeft
Hot rot corner bottom left defines bottom left of hot rotation corner for blocks.

```javascript
block.hotRotCornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerBottomLeft** : `{ x: number; y: number }`
---
### hotRotCornerBottomRight
Hot rot corner bottom right defines bottom right of hot rotation corner for blocks.

```javascript
block.hotRotCornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerBottomRight** : `{ x: number; y: number }`
---
### hotRotatableAreaTopLeft
Hot rotatable area top left defines top left of hot rotation area for blocks.

```javascript
block.hotRotatableAreaTopLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaTopLeft** : HotCornerArea
---
### hotRotatableAreaTopRight
Hot rotatable area top right defines top right of hot rotation area for blocks.


```javascript
block.hotRotatableAreaTopRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaTopRight** : HotCornerArea
---
### hotRotatableAreaBottomLeft
Hot rotatable area bottom left defines bottom left of hot rotation area for blocks.


```javascript
block.hotRotatableAreaBottomLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaBottomLeft** : HotCornerArea
---
### hotRotatableAreaBottomRight
Hot rotatable area bottom right defines bottom right of hot rotation area for blocks.


```javascript
block.hotRotatableAreaBottomRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaBottomRight** : HotCornerArea
---
### hotResizableAreaTopLeft
Hot resizable area top left defines top left of hot resizing area for blocks.

```javascript
block.hotResizableAreaTopLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaTopLeft** : HotCornerArea
---
### hotResizableAreaTopRight
Hot resizable area top right defines top right of hot resizing area for blocks.


```javascript
block.hotResizableAreaTopRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaTopRight** : HotCornerArea
---
### hotResizableAreaBottomLeft
Hot resizable area bottom left defines bottom left of hot resizing area for blocks.


```javascript
block.hotResizableAreaBottomLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaBottomLeft** : HotCornerArea
---
### hotResizableAreaBottomRight
Hot resizable area bottom right defines bottom right of hot resizing area for blocks.


```javascript
block.hotResizableAreaBottomRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaBottomRight** : HotCornerArea
---
### hotResizableAreaTop
Hot resizable area top defines top area of hot resizing for blocks.

```javascript
block.hotResizableAreaTop(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaTop** : HotCornerArea
---
### hotResizableAreaRight
Hot resizable area right defines right area of hot resizing for blocks.


```javascript
block.hotResizableAreaRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaRight** : HotCornerArea
---
### hotResizableAreaLeft
Hot resizable area left defines left area of hot resizing for blocks.


```javascript
block.hotResizableAreaLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaLeft** : HotCornerArea
---
### hotResizableAreaBottom
Hot resizable area bottom defines bottom area of hot resizing for blocks.

```javascript
block.hotResizableAreaBottom(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaBottom** : HotCornerArea

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