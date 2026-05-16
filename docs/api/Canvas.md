
```javascript
new Canvas("canvasId", width, height)
```
Canvas rendering all defined blocks in native html canvas element. Canvas class requires `canvasId`, `width`, `height` for constructoring canvas scene.

## Parameters

### zoomType
Canvas can zoom to `center` or `point`. In `center` zoom, canvas only zooming to the center of the canvas. In `point` canvas zooming where is the mouse points to.

**Parameter**
* **type** : "center" | "point"
* **default**: "center"
---
### keyboardMovement
In keyboard movement, canvas relative cordinates move on x and y axis via keyboard.Canvas will move up or down If you move wheel without pressing `ctrl` key, otherwise it will move left or right. 

**Parameter**
* **keyboardMovement** : boolean
* **default**: true
---
### mouseMovement
In mouse movement, canvas relative cordinates move on x and y axis via mouse dragging action. You can enable this feature by pressing `space` key.   

```javascript
block.mouseMovement(option)
```

**Parameter**
* **type** : boolean
* **default**: true
---
### zoomSpeed
Zoom speed defines how much speed we apply on zoom in.

```javascript
block.zoomSpeed(option)
```

**Parameter**
* **type** : number
* **default**: 1.2
---
### zoomInvSpeed
Inverse zoom speed defines how much speed we apply on zoom out.

```javascript
block.zoomInvSpeed(option)
```

**Parameter**
* **type** : number
* **default**: 0.8
---
### moveSpeed
Movement speed defines how much speed we apply on movement either on `keyboardMovement` or `mouseMovement`

```javascript
block.moveSpeed(option)
```

**Parameter**
* **type** : number
* **default**: 10
---
### positionX
Canvas initial x axis can be defined via `positionX` option. 

```javascript
block.positionX(option)
```

**Parameter**
* **type** : number
* **default**: 0
---
### positionY
Canvas initial y axis can be defined via `positionY` option. 

```javascript
block.positionY(option)
```

**Parameter**
* **type** : number
* **default**: 0
---
### positionZ
Canvas initial z axis can be defined via `positionZ` option. 

```javascript
block.positionZ(option)
```

**Parameter**
* **type** : number
* **default**: 1
---
### history
History enables to store every taken actions in canvas.

```javascript
block.history(option)
```

**Parameter**
* **type** : boolean
* **default**: true
---
### historySize
History size defines how much of actions will store in canvas. If you exceed history size, old actions will be removed to new actins to be added. 

```javascript
block.historySize(option)
```

**Parameter**
* **type** : number
* **default**: 100
---
### fps
Canvas animations fps defines via `fps` option.

```javascript
block.fps(option)
```

**Parameter**
* **type** : number
* **default**: 60

## Methods
### canvas

```javascript
block.canvas()
```

**Parameters**
* **value**: boolean

**Returns**
* **canvas** : void
---
### context

```javascript
block.context()
```

**Parameters**
* **value**: boolean

**Returns**
* **context** : void
---
### add

```javascript
block.add()
```

**Parameters**
* **value**: boolean

**Returns**
* **add** : void
---
### export

```javascript
block.export()
```

**Parameters**
* **value**: boolean

**Returns**
* **export** : void
---
### load

```javascript
block.load()
```

**Parameters**
* **value**: boolean

**Returns**
* **load** : void
---
### inBoundBlock

```javascript
block.inBoundBlock()
```

**Parameters**
* **value**: boolean

**Returns**
* **inBoundBlock** : void
---
### clearRect

```javascript
block.clearRect()
```

**Parameters**
* **value**: boolean

**Returns**
* **clearRect** : void
---
### takeSnapshot

```javascript
block.takeSnapshot()
```

**Parameters**
* **value**: boolean

**Returns**
* **takeSnapshot** : void
---
### undo

```javascript
block.undo()
```

**Parameters**
* **value**: boolean

**Returns**
* **undo** : void
---
### redo

```javascript
block.redo()
```

**Parameters**
* **value**: boolean

**Returns**
* **redo** : void
---
### invokeChange

```javascript
block.invokeChange()
```

**Parameters**
* **value**: boolean

**Returns**
* **invokeChange** : void
---
### registerAnimation

```javascript
block.registerAnimation()
```

**Parameters**
* **value**: boolean

**Returns**
* **registerAnimation** : void
---
### removeAnimation

```javascript
block.removeAnimation()
```

**Parameters**
* **value**: boolean

**Returns**
* **removeAnimation** : void
---
### registerEvent

```javascript
block.registerEvent()
```

**Parameters**
* **value**: boolean

**Returns**
* **registerEvent** : void
---
### removeEvent

```javascript
block.removeEvent()
```

**Parameters**
* **value**: boolean

**Returns**
* **removeEvent** : void
---
### registerZIndex

```javascript
block.registerZIndex()
```

**Parameters**
* **value**: boolean

**Returns**
* **registerZIndex** : void
---
### whoIsTheFirst

```javascript
block.whoIsTheFirst()
```

**Parameters**
* **value**: boolean

**Returns**
* **whoIsTheFirst** : void
---
### find

```javascript
block.find()
```

**Parameters**
* **value**: boolean

**Returns**
* **find** : void

---
### canvasBounding

```javascript
block.canvasBounding()
```

**Parameters**
* **value**: boolean

**Returns**
* **canvasBounding** : void

---
### registerBlock

```javascript
block.registerBlock()
```

**Parameters**
* **value**: boolean

**Returns**
* **registerBlock** : void


