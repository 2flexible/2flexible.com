```javascript
new LineBlock({...options})
```
LineBlock class is line shape inherted from `ShapeBlock` class.

:::info

Keep in mind that because LineBlock inherits from ShapeBlock, it can use some of the options of ShapeBlock. You can check [shape block api](/docs/api/ShapeBlock.md) for other options apply to LineBlock.

:::

## Options

### lineType
Line can be straigth line or cubic bezier in LineBlock.

```javascript
block.lineType(option)
```

**Option**
* **type** : "line" || "cubicBezier"
* **default**: "line"

**Returns**
* **lineType** : "line" || "cubicBezier"
---
### startX
Start point of line in x axis.

```javascript
block.startX(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **startX** : number | string
---
### startY
Start point of line in y axis.

```javascript
block.startY(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **startY** : number | string
---
### endX
End point of line in x axis.

```javascript
block.endX(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **endX** : number | string
---
### endY
End point of line in y axis.

```javascript
block.endY(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **endY** : number | string
---
### startControlX
Control point for `startX` in x axis. This option only works when `lineType` is set to `cubicBezier`.

```javascript
block.startControlX(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **startControlX** : number | string
---
### startControlY
Control point for `startY` in y axis. This option only works when `lineType` is set to `cubicBezier`.

```javascript
block.startControlY(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **startControlY** : number | string
---
### endControlX
Control point for `endX` in x axis. This option only works when `lineType` is set to `cubicBezier`.

```javascript
block.endControlX(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **endControlX** : number | string
---
### endControlY
Control point for `endY` in y axis. This option only works when `lineType` is set to `cubicBezier`.


```javascript
block.endControlY(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **endControlY** : number | string
---
### controlPointsSize
describtion

```javascript
block.controlPointsSize(option)
```

**Option**
* **type** : number | string
* **default**: 5

**Returns**
* **controlPointsSize** : number | string
---
### editable
describtion

```javascript
block.editable(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **editable** : boolean
---
### startDraggable
Dragging start control point in relative x and y axis. This option depeneds on `editable` property.

```javascript
block.startDraggable(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **startDraggable** : boolean
---
### endDraggable
Dragging end control point in relative x and y axis. This option depeneds on `editable` property.

```javascript
block.endDraggable(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **endDraggable** : boolean
---
### startControllable
Start controlrollable enables or disables controling for start control point. This option depeneds on `editable` property.

```javascript
block.startControllable(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **startControllable** : boolean
---
### endControllable
End controlrollable enables or disables controling for end control point. This option depeneds on `editable` property.

```javascript
block.endControllable(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **endControllable** : boolean
---
### lineColor
Line color defines color of line for LineBlock.

```javascript
block.lineColor(option)
```

**Option**
* **type** : number
* **default**: undefined

**Returns**
* **lineColor** : number
---
### backgroundColor
Background color defines color of background for LineBlock.

```javascript
block.backgroundColor(option)
```

**Option**
* **type** : string
* **default**: undefined

**Returns**
* **backgroundColor** : string
---
### closeLine
Closing defined line in LineBlock.

```javascript
block.closeLine(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **closeLine** : boolean
---
### stickStart
Sticking line start point to a block, in defined x and y axis relative to sticked block.

```javascript
block.stickStart(option)
```

**Option**
* **type** : `{block: Block , x: number, y: number}`
* **default**: undefined

**Returns**
* **stickStart** : `{block: Block , x: number, y: number}` | undefined
---
### stickEnd
Sticking line end point to a block, in defined x and y axis relative to sticked block.

```javascript
block.stickEnd(option)
```

**Option**
* **type** : `{block: Block , x: number, y: number}`
* **default**: undefined

**Returns**
* **stickStart** : `{block: Block , x: number, y: number}` | undefined
---
### joinTo
Join to defines which line to join. Joined lines move, resize, drag together, behaving like a grouped blocks.

```javascript
block.joinTo(option)
```

**Option**
* **type** : LineBlock
* **default**: undefined

**Returns**
* **joinTo** : LineBlock
