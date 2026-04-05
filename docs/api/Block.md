# Block

Everything in the canvas is a block, you can create your own block by extending the `Block` class.
You can define list of options available in blocks via passing an object to the constructor:

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

```javascript
new Block(options)
```

Or you can define them as a method of the block after constructing your block:

```javascript
const block = new Block();
block.x(option);
```

## Options

### x

You can define your block's x position on canvas, block position always starts from the top left corner of the canvas.

```javascript
block.x(option)
```

**Option**

* **type** : string | number
* **default**: 0


**Returns**

* **x** : number

### y
describtion

```javascript
block.y(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **y** : number

### width
describtion

```javascript
block.width(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **width** : number

### height
describtion

```javascript
block.height(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **height** : number

### minWidth
describtion

```javascript
block.minWidth(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **minWidth** : number

### minHeight
describtion

```javascript
block.minHeight(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **minHeight** : number

### maxWidth
describtion

```javascript
block.maxWidth(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **maxWidth** : number

### maxHeight
describtion

```javascript
block.maxHeight(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **maxHeight** : number

### position
describtion

```javascript
block.position(option)
```

**Option**
* **type** : "static" | "relative" | "absolute" | "sticky" | "fixed"
* **default**:

**Returns**
* **position** : string

### top
describtion

```javascript
block.top(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **top** : number

### bottom
describtion

```javascript
block.bottom(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **bottom** : number

### left
describtion

```javascript
block.left(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **left** : number

### right
describtion

```javascript
block.right(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **right** : number

### selectable
describtion

```javascript
block.selectable(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **selectable** : boolean

### padding
describtion

```javascript
block.padding(option)
```

**Option**
* **type** : [string | number, string | number, string | number, string | number]
* **default**:

**Returns**
* **padding** : [number, number, number, number]

### paddingTop
describtion

```javascript
block.paddingTop(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **paddingTop** : number

### paddingRight
describtion

```javascript
block.paddingRight(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **paddingRight** : number

### paddingBottom
describtion

```javascript
block.paddingBottom(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **paddingBottom** : number

### paddingLeft
describtion

```javascript
block.paddingLeft(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **paddingLeft** : number

### margin
describtion

```javascript
block.margin(option)
```

**Option**
* **type** : [string | number, string | number, string | number, string | number]
* **default**:

**Returns**
* **margin** : [number, number, number, number]

### marginTop
describtion

```javascript
block.marginTop(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **marginTop** : number

### marginRight
describtion

```javascript
block.marginRight(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **marginRight** : number

### marginBottom
describtion

```javascript
block.marginBottom(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **marginBottom** : number

### marginLeft
describtion

```javascript
block.marginLeft(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **marginLeft** : number

### fillRule
describtion

```javascript
block.fillRule(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **fillRule** : string

### zIndex
describtion

```javascript
block.zIndex(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **zIndex** : number

### draggable
describtion

```javascript
block.draggable(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **draggable** : boolean

### onDrag
describtion

```javascript
block.onDrag(option)
```

**Option**
* **type** : (event: MouseEvent) => void
* **default**:

**Returns**
* **onDrag** : (event: MouseEvent) => void

### dragX
describtion

```javascript
block.dragX(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **dragX** : boolean

### dragY
describtion

```javascript
block.dragY(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **dragY** : boolean

### visible
describtion

```javascript
block.visible(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **visible** : boolean

### rotate
describtion

```javascript
block.rotate(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **rotate** : number

### onRotate
describtion

```javascript
block.onRotate(option)
```

**Option**
* **type** : (event: MouseEvent) => void
* **default**:

**Returns**
* **onRotate** : (event: MouseEvent) => void

### order
describtion

```javascript
block.order(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **order** : number

### alignSelf
describtion

```javascript
block.alignSelf(option)
```

**Option**
* **type** : "normal" | "auto" | "center" | "start" | "end" | "stretch" | "left" | "right"
* **default**:

**Returns**
* **alignSelf** : string

### justifySelf
describtion

```javascript
block.justifySelf(option)
```

**Option**
* **type** : "normal" | "auto" | "center" | "start" | "end" | "stretch" | "left" | "right"
* **default**:

**Returns**
* **justifySelf** : string

### flexShrink
describtion

```javascript
block.flexShrink(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **flexShrink** : number

### flexBasis
describtion

```javascript
block.flexBasis(option)
```

**Option**
* **type** : number | string
* **default**:

**Returns**
* **flexBasis** : number | string

### flexGrow
describtion

```javascript
block.flexGrow(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **flexGrow** : number

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

### gridArea
describtion

```javascript
block.gridArea(option)
```

**Option**
* **type** : number[] | string
* **default**:

**Returns**
* **gridArea** : number[] | string

### hotAreaGap
describtion

```javascript
block.hotAreaGap(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **hotAreaGap** : number

### hotCornerSize
describtion

```javascript
block.hotCornerSize(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **hotCornerSize** : number

### hotCornerRadius
describtion

```javascript
block.hotCornerRadius(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **hotCornerRadius** : number

### hotCornerStrokeWidth
describtion

```javascript
block.hotCornerStrokeWidth(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **hotCornerStrokeWidth** : number

### hotCornerStrokeColor
describtion

```javascript
block.hotCornerStrokeColor(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **hotCornerStrokeColor** : string

### hotCornerBackgroundColor
describtion

```javascript
block.hotCornerBackgroundColor(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **hotCornerBackgroundColor** : string

### hotLineStrokeWidth
describtion

```javascript
block.hotLineStrokeWidth(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **hotLineStrokeWidth** : number

### hotLineStrokeColor
describtion

```javascript
block.hotLineStrokeColor(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **hotLineStrokeColor** : string

### rotationRadius
describtion

```javascript
block.rotationRadius(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **rotationRadius** : number

### rotationTopLeft
describtion

```javascript
block.rotationTopLeft(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **rotationTopLeft** : boolean

### rotationTopRight
describtion

```javascript
block.rotationTopRight(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **rotationTopRight** : boolean

### rotationBottomLeft
describtion

```javascript
block.rotationBottomLeft(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **rotationBottomLeft** : boolean

### rotationBottomRight
describtion

```javascript
block.rotationBottomRight(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **rotationBottomRight** : boolean

### resizeTopLeft
describtion

```javascript
block.resizeTopLeft(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeTopLeft** : boolean

### resizeTopRight
describtion

```javascript
block.resizeTopRight(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeTopRight** : boolean

### resizeBottomLeft
describtion

```javascript
block.resizeBottomLeft(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeBottomLeft** : boolean

### resizeBottomRight
describtion

```javascript
block.resizeBottomRight(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeBottomRight** : boolean

### resizeTop
describtion

```javascript
block.resizeTop(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeTop** : boolean

### resizeLeft
describtion

```javascript
block.resizeLeft(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeLeft** : boolean

### resizeRight
describtion

```javascript
block.resizeRight(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeRight** : boolean

### resizeBottom
describtion

```javascript
block.resizeBottom(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizeBottom** : boolean

### horizontalFlipResize
describtion

```javascript
block.horizontalFlipResize(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **horizontalFlipResize** : boolean

### verticalFlipResize
describtion

```javascript
block.verticalFlipResize(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **verticalFlipResize** : boolean

### resizable
describtion

```javascript
block.resizable(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **resizable** : boolean

### onResize
describtion

```javascript
block.onResize(option)
```

**Option**
* **type** : (event: MouseEvent) => void
* **default**:

**Returns**
* **onResize** : (event: MouseEvent) => void

### hidden
describtion

```javascript
block.hidden(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **hidden** : boolean


### persistHidden
describtion

```javascript
block.persistHidden(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **persistHidden** : boolean

### rotationCenterX
describtion

```javascript
block.rotationCenterX(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **rotationCenterX** : number

### rotationCenterY
describtion

```javascript
block.rotationCenterY(option)
```

**Option**
* **type** : string | number
* **default**:

**Returns**
* **rotationCenterY** : number

### cornerTopLeft
describtion

```javascript
block.cornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerTopLeft** : `{ x: number; y: number }`

### cornerTopRight
describtion

```javascript
block.cornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerTopRight** : `{ x: number; y: number }`

### cornerBottomLeft
describtion

```javascript
block.cornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerBottomLeft** : `{ x: number; y: number }`

### cornerBottomRight
describtion

```javascript
block.cornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **cornerBottomRight** : `{ x: number; y: number }`

### hotCornerTopLeft
describtion

```javascript
block.hotCornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerTopLeft** : `{ x: number; y: number }`

### hotCornerTopRight
describtion

```javascript
block.hotCornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerTopRight** : `{ x: number; y: number }`

### hotCornerBottomLeft
describtion

```javascript
block.hotCornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerBottomLeft** : `{ x: number; y: number }`

### hotCornerBottomRight
describtion

```javascript
block.hotCornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotCornerBottomRight** : `{ x: number; y: number }`

### hotRotCornerTopLeft
describtion

```javascript
block.hotRotCornerTopLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerTopLeft** : `{ x: number; y: number }`

### hotRotCornerTopRight
describtion

```javascript
block.hotRotCornerTopRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerTopRight** : `{ x: number; y: number }`

### hotRotCornerBottomLeft
describtion

```javascript
block.hotRotCornerBottomLeft(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerBottomLeft** : `{ x: number; y: number }`

### hotRotCornerBottomRight
describtion

```javascript
block.hotRotCornerBottomRight(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **hotRotCornerBottomRight** : `{ x: number; y: number }`

### hotRotatableAreaTopLeft
describtion

```javascript
block.hotRotatableAreaTopLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaTopLeft** : HotCornerArea

### hotRotatableAreaTopRight
describtion

```javascript
block.hotRotatableAreaTopRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaTopRight** : HotCornerArea

### hotRotatableAreaBottomLeft
describtion

```javascript
block.hotRotatableAreaBottomLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaBottomLeft** : HotCornerArea

### hotRotatableAreaBottomRight
describtion

```javascript
block.hotRotatableAreaBottomRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotRotatableAreaBottomRight** : HotCornerArea

### hotResizableAreaTopLeft
describtion

```javascript
block.hotResizableAreaTopLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaTopLeft** : HotCornerArea

### hotResizableAreaTopRight
describtion

```javascript
block.hotResizableAreaTopRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaTopRight** : HotCornerArea

### hotResizableAreaBottomLeft
describtion

```javascript
block.hotResizableAreaBottomLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaBottomLeft** : HotCornerArea

### hotResizableAreaBottomRight
describtion

```javascript
block.hotResizableAreaBottomRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaBottomRight** : HotCornerArea

### hotResizableAreaTop
describtion

```javascript
block.hotResizableAreaTop(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaTop** : HotCornerArea

### hotResizableAreaRight
describtion

```javascript
block.hotResizableAreaRight(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaRight** : HotCornerArea

### hotResizableAreaLeft
describtion

```javascript
block.hotResizableAreaLeft(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaLeft** : HotCornerArea

### hotResizableAreaBottom
describtion

```javascript
block.hotResizableAreaBottom(option)
```

**Option**
* **type** : HotCornerArea
* **default**:

**Returns**
* **hotResizableAreaBottom** : HotCornerArea

### translate
describtion

```javascript
block.translate(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **translate** : `{ x: number; y: number }`

### overflowTranslate
describtion

```javascript
block.overflowTranslate(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **overflowTranslate** : `{ x: number; y: number }`
