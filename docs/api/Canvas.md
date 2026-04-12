
```javascript
new Canvas("canvasId", width, height)
```
Canvas rendering all defined blocks in native html canvas element. Canvas class requires `canvasId`, `width`, `height` for constructoring canvas scene.

## Parameters

### zoom
Canvas can be zoom to `center` or `point`. In `center` zoom, canvas only zooming to the center of the canvas. In `point` canvas zooming where is the mouse points to.

**Parameter**
* **zoom** : "center" | "point"
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
### x
Canvas initial x axis can be defined via `x` option. 

```javascript
block.x(option)
```

**Parameter**
* **type** : number
* **default**: 0
---
### y
Canvas initial y axis can be defined via `y` option. 

```javascript
block.y(option)
```

**Parameter**
* **type** : number
* **default**: 0
---
### z
Canvas initial z axis can be defined via `z` option. 

```javascript
block.z(option)
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

