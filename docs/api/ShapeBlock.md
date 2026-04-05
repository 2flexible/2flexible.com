### fill
describtion

```javascript
block.fill(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **fill** : boolean

### fillStyle
describtion

```javascript
block.fillStyle(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **fillStyle** : string

### stroke
describtion

```javascript
block.stroke(option)
```

**Option**
* **type** : boolean
* **default**:

**Returns**
* **stroke** : boolean

### strokeStyle
describtion

```javascript
block.strokeStyle(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **strokeStyle** : string

### line
describtion

```javascript
block.line(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **line** : `{ x: number; y: number }`

### lineWidth
describtion

```javascript
block.lineWidth(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **lineWidth** : number

### lineDash
describtion

```javascript
block.lineDash(option)
```

**Option**
* **type** : number[]
* **default**:

**Returns**
* **lineDash** : number[]

### lineCap
describtion

```javascript
block.lineCap(option)
```

**Option**
* **type** : "butt" | "round" | "square"
* **default**:

**Returns**
* **lineCap** : string

### lineJoin
describtion

```javascript
block.lineJoin(option)
```

**Option**
* **type** : "miter" | "round" | "bevel"
* **default**:

**Returns**
* **lineJoin** : string

### bezierCurve
describtion

```javascript
block.bezierCurve(option)
```

**Option**
* **type** : `{ cpx1: number; cpy1: number; cpx2: number; cpy2: number; endX: number; endY: number }`
* **default**:

**Returns**
* **bezierCurve** : `{ cpx1: number; cpy1: number; cpx2: number; cpy2: number; endX: number; endY: number }`

### quadraticCurve
describtion

```javascript
block.quadraticCurve(option)
```

**Option**
* **type** : `{ cpx1: number; cpy1: number; endX: number; endY: number }`
* **default**:

**Returns**
* **quadraticCurve** : `{ cpx1: number; cpy1: number; endX: number; endY: number }`

### rect
describtion

```javascript
block.rect(option)
```

**Option**
* **type** : `{ x: number; y: number; width: number; height: number }`
* **default**:

**Returns**
* **rect** : `{ x: number; y: number; width: number; height: number }`

### roundRect
describtion

```javascript
block.roundRect(option)
```

**Option**
* **type** : `{ x: number; y: number; width: number; height: number; borderRadius: number[] }`
* **default**:

**Returns**
* **roundRect** : `{ x: number; y: number; width: number; height: number; borderRadius: number[] }`

### strokeRect
describtion

```javascript
block.strokeRect(option)
```

**Option**
* **type** : `{ x: number; y: number; width: number; height: number }`
* **default**:

**Returns**
* **strokeRect** : `{ x: number; y: number; width: number; height: number }`

### pointInPath
describtion

```javascript
block.pointInPath(option)
```

**Option**
* **type** : `{ x: number; y: number; path?: Path2D; fillRule?: CanvasFillRule }`
* **default**:

**Returns**
* **pointInPath** : `{ x: number; y: number; path?: Path2D; fillRule?: CanvasFillRule }`

### pointInStroke
describtion

```javascript
block.pointInStroke(option)
```

**Option**
* **type** : `{ x: number; y: number; path?: Path2D }`
* **default**:

**Returns**
* **pointInStroke** : `{ x: number; y: number; path?: Path2D }`

### moveTo
describtion

```javascript
block.moveTo(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**:

**Returns**
* **moveTo** : `{ x: number; y: number }`

### radialGradient
describtion

```javascript
block.radialGradient(option)
```

**Option**
* **type** : `{ x0: number; y0: number; r0: number; x1: number; y1: number; r1: number }`
* **default**:

**Returns**
* **radialGradient** : `{ x0: number; y0: number; r0: number; x1: number; y1: number; r1: number }`

### linearGradient
describtion

```javascript
block.linearGradient(option)
```

**Option**
* **type** : `{ x0: number; y0: number; x1: number; y1: number }`
* **default**:

**Returns**
* **linearGradient** : `{ x0: number; y0: number; x1: number; y1: number }`

### conicGradient
describtion

```javascript
block.conicGradient(option)
```

**Option**
* **type** : `{ angle: number; x: number; y: number }`
* **default**:

**Returns**
* **conicGradient** : `{ angle: number; x: number; y: number }`

### colorStops
describtion

```javascript
block.colorStops(option)
```

**Option**
* **type** : `{ stop: number; color: string }[]`
* **default**:

**Returns**
* **colorStops** : `{ stop: number; color: string }[]`

### blur
describtion

```javascript
block.blur(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **blur** : number

### brightness
describtion

```javascript
block.brightness(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **brightness** : number

### contrast
describtion

```javascript
block.contrast(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **contrast** : number

### dropShadow
describtion

```javascript
block.dropShadow(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **dropShadow** : number

### grayscale
describtion

```javascript
block.grayscale(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **grayscale** : number

### hueRotate
describtion

```javascript
block.hueRotate(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **hueRotate** : number

### saturate
describtion

```javascript
block.saturate(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **saturate** : number

### sepia
describtion

```javascript
block.sepia(option)
```

**Option**
* **type** : number
* **default**:

**Returns**
* **sepia** : number

### fillText
describtion

```javascript
block.fillText(option)
```

**Option**
* **type** : `{ text: string; x: number; y: number; maxWidth: number }`
* **default**:

**Returns**
* **fillText** : `{ text: string; x: number; y: number; maxWidth: number }`

### strokeText
describtion

```javascript
block.strokeText(option)
```

**Option**
* **type** : `{ text: string; x: number; y: number; maxWidth: number }`
* **default**:

**Returns**
* **strokeText** : `{ text: string; x: number; y: number; maxWidth: number }`

### fontWeight
describtion

```javascript
block.fontWeight(option)
```

**Option**
* **type** : "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
* **default**:

**Returns**
* **fontWeight** : string | number

### fontStyle
describtion

```javascript
block.fontStyle(option)
```

**Option**
* **type** : "normal" | "italic" | "oblique"
* **default**:

**Returns**
* **fontStyle** : string

### fontVariant
describtion

```javascript
block.fontVariant(option)
```

**Option**
* **type** : "normal" | "small-caps"
* **default**:

**Returns**
* **fontVariant** : string

### fontStretch
describtion

```javascript
block.fontStretch(option)
```

**Option**
* **type** : "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded"
* **default**:

**Returns**
* **fontStretch** : string

### fontKerning
describtion

```javascript
block.fontKerning(option)
```

**Option**
* **type** : "normal" | "auto" | "none"
* **default**:

**Returns**
* **fontKerning** : string

### fontVariantCaps
describtion

```javascript
block.fontVariantCaps(option)
```

**Option**
* **type** : "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps"
* **default**:

**Returns**
* **fontVariantCaps** : string

### textBaseline
describtion

```javascript
block.textBaseline(option)
```

**Option**
* **type** : "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom"
* **default**:

**Returns**
* **textBaseline** : string

### textRendering
describtion

```javascript
block.textRendering(option)
```

**Option**
* **type** : "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision"
* **default**:

**Returns**
* **textRendering** : string

### wordSpacing
describtion

```javascript
block.wordSpacing(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **wordSpacing** : string

### letterSpacing
describtion

```javascript
block.letterSpacing(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **letterSpacing** : string

### direction
describtion

```javascript
block.direction(option)
```

**Option**
* **type** : "ltr" | "rtl"
* **default**:

**Returns**
* **direction** : string

### clip
describtion

```javascript
block.clip(option)
```

**Option**
* **type** : `{ path?: Path2D; fillRule?: CanvasFillRule }`
* **default**:

**Returns**
* **clip** : `{ path?: Path2D; fillRule?: CanvasFillRule }`

### pathData
describtion

```javascript
block.pathData(option)
```

**Option**
* **type** : string
* **default**:

**Returns**
* **pathData** : string
```
