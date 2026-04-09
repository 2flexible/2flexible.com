
```javascript
new Canvas("myCanvas", 300, 400)
```
Canvas rendering all defined blocks in native html canvas element. Canvas class requires `canvasId`, `width`, `height` for constructoring canvas scene.

### zoom
Canvas can be zoom to `center` or `point`. In `center` zoom, canvas only zooming to the center of the canvas. In `point` canvas zooming where is the mouse points to.

```javascript
block.zoom(option)
```

**Option**
* **type** : "center" | "point"
* **default**: "center"

**Returns**
* **zoom** : "center" | "point"

### keyboardMovement
In keyboard movement, canvas relative cordinates move on x and y axis via keyboard.Canvas will move up or down If you move wheel without pressing `ctrl` key, otherwise it will move left or right. 

```javascript
block.keyboardMovement(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **keyboardMovement** : boolean

### mouseMovement
In mouse movement, canvas relative cordinates move on x and y axis via mouse dragging action. You can enable this feature by pressing `space` key.   

```javascript
block.mouseMovement(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **mouseMovement** : boolean

### zoomSpeed
Zoom speed defines how much speed we apply on zoom in.

```javascript
block.zoomSpeed(option)
```

**Option**
* **type** : number
* **default**: 1.2

**Returns**
* **zoomSpeed** : number

### zoomInvSpeed
Inverse zoom speed defines how much speed we apply on zoom out.

```javascript
block.zoomInvSpeed(option)
```

**Option**
* **type** : number
* **default**: 0.8

**Returns**
* **zoomInvSpeed** : number

### moveSpeed
Movement speed defines how much speed we apply on movement either on `keyboardMovement` or `mouseMovement`

```javascript
block.moveSpeed(option)
```

**Option**
* **type** : number
* **default**: 10

**Returns**
* **moveSpeed** : number

### x
Canvas initial x axis can be defined via `x` option. 

```javascript
block.x(option)
```

**Option**
* **type** : number
* **default**: 0

**Returns**
* **x** : number

### y
Canvas initial y axis can be defined via `y` option. 

```javascript
block.y(option)
```

**Option**
* **type** : number
* **default**: 0

**Returns**
* **y** : number

### z
Canvas initial z axis can be defined via `z` option. 

```javascript
block.z(option)
```

**Option**
* **type** : number
* **default**: 1

**Returns**
* **z** : number

### history
History enables to store every taken actions in canvas.

```javascript
block.history(option)
```

**Option**
* **type** : boolean
* **default**: true

**Returns**
* **history** : boolean

### historySize
History size defines how much of actions will store in canvas. If you exceed history size, old actions will be removed to new actins to be added. 

```javascript
block.historySize(option)
```

**Option**
* **type** : number
* **default**: 100

**Returns**
* **historySize** : number

### fps
Canvas animations fps defines via `fps` option.

```javascript
block.fps(option)
```

**Option**
* **type** : number
* **default**: 60

**Returns**
* **fps** : number

