## Options

### fill
Fill option fills current context or given path. This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill
```javascript
block.fill(option)
```

**Option**
* **type** : `{ fill: boolean, path: Path2D | undefined, fillRule: "evenodd" | "nonzero" }`
* **default**: undefined

**Returns**
* **fill** : `{ fill: boolean, path: Path2D | undefined, fillRule: "evenodd" | "nonzero" }` | undefined
---
### fillStyle
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle

```javascript
block.fillStyle(option)
```

**Option**
* **type** : string | CanvasGradient | CanvasPattern
* **default**: undefined

**Returns**
* **fillStyle** : string | CanvasGradient | CanvasPattern | undefined
---
### stroke
Stroke option strokes current context or given path. This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke

```javascript
block.stroke(option)
```

**Option**
* **type** : `{ stroke: boolean, path: Path2D | undefined }`
* **default**: undefined

**Returns**
* **stroke** : `{ stroke: boolean, path: Path2D | undefined }` | undefined
---
### strokeStyle
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle

```javascript
block.strokeStyle(option)
```

**Option**
* **type** : string | CanvasGradient | CanvasPattern
* **default**: undefined

**Returns**
* **strokeStyle** : string | CanvasGradient | CanvasPattern | undefined
---
### lineTo
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo

```javascript
block.lineTo(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**: undefined

**Returns**
* **lineTo** : `{ x: number; y: number }` | undefined
---
### lineWidth
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth

```javascript
block.lineWidth(option)
```

**Option**
* **type** : number
* **default**: undefined

**Returns**
* **lineWidth** : number | undefined
---
### lineDash
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash


```javascript
block.lineDash(option)
```

**Option**
* **type** : number[]
* **default**: undefined

**Returns**
* **lineDash** : number[] | undefined
---
### lineDashOffset
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset


```javascript
block.lineDashOffset(option)
```

**Option**
* **type** : number
* **default**: undefined

**Returns**
* **lineDashOffset** : number | undefined
---
### lineCap
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap

```javascript
block.lineCap(option)
```

**Option**
* **type** : "butt" | "round" | "square"
* **default**: undefined

**Returns**
* **lineCap** : "butt" | "round" | "square" | undefined
---
### lineJoin
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin

```javascript
block.lineJoin(option)
```

**Option**
* **type** : "miter" | "round" | "bevel"
* **default**: undefined

**Returns**
* **lineJoin** : "miter" | "round" | "bevel" | undefined
---
### bezierCurveTo
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveToTo

```javascript
block.bezierCurveTo(option)
```

**Option**
* **type** : `{ cpx1: number; cpy1: number; cpx2: number; cpy2: number; endX: number; endY: number }`
* **default**: undefined

**Returns**
* **bezierCurveTo** : `{ cpx1: number; cpy1: number; cpx2: number; cpy2: number; endX: number; endY: number }` | undefined
---
### quadraticCurveTo
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo

```javascript
block.quadraticCurveTo(option)
```

**Option**
* **type** : `{ cpx1: number; cpy1: number; endX: number; endY: number }`
* **default**: undefined

**Returns**
* **quadraticCurveTo** : `{ cpx1: number; cpy1: number; endX: number; endY: number }` | undefined
---
### arc
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc

```javascript
block.arc(option)
```

**Option**
* **type** : `{x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean | undefined}`
* **default**: undefined

**Returns**
* **arc** : `{x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean | undefined}` | undefined
---
### arcTo
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo

```javascript
block.arcTo(option)
```

**Option**
* **type** : `{x1: number, y1: number, x2: number, y2: number, radius: number}`
* **default**: undefined

**Returns**
* **arcTo** : `{x1: number, y1: number, x2: number, y2: number, radius: number}` | undefined
---
### ellipse
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse

```javascript
block.ellipse(option)
```

**Option**
* **type** : `{x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean | undefined}`
* **default**: undefined

**Returns**
* **ellipse** :` {x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean | undefined}` | undefined
---
### rect
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect

```javascript
block.rect(option)
```

**Option**
* **type** : `{ x: number; y: number; width: number; height: number }`
* **default**: undefined

**Returns**
* **rect** : `{ x: number; y: number; width: number; height: number }` | undefined
---
### roundRect
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/roundRect

```javascript
block.roundRect(option)
```

**Option**
* **type** : `{ x: number; y: number; width: number; height: number; borderRadius: number[] }`
* **default**: undefined

**Returns**
* **roundRect** : `{ x: number; y: number; width: number; height: number; borderRadius: number[] }` | undefined
---
### strokeRect
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect

```javascript
block.strokeRect(option)
```

**Option**
* **type** : `{ x: number; y: number; width: number; height: number }`
* **default**: undefined

**Returns**
* **strokeRect** : `{ x: number; y: number; width: number; height: number }` | undefined
---
### moveTo
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo

```javascript
block.moveTo(option)
```

**Option**
* **type** : `{ x: number; y: number }`
* **default**: undefined

**Returns**
* **moveTo** : `{ x: number; y: number }` | undefined
---
### radialGradient
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient

```javascript
block.radialGradient(option)
```

**Option**
* **type** : `{ x0: number; y0: number; r0: number; x1: number; y1: number; r1: number }`
* **default**: undefined

**Returns**
* **radialGradient** : CanvasGradient | undefined
---
### linearGradient
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient

```javascript
block.linearGradient(option)
```

**Option**
* **type** : `{ x0: number; y0: number; x1: number; y1: number }`
* **default**: undefined

**Returns**
* **linearGradient** : CanvasGradient | undefined
---
### conicGradient
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createConicGradient

```javascript
block.conicGradient(option)
```

**Option**
* **type** : `{ angle: number; x: number; y: number }`
* **default**: undefined

**Returns**
* **conicGradient** : CanvasGradient | undefined
---
### colorStops
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient/addColorStop

```javascript
block.colorStops(option)
```

**Option**
* **type** : `{ stop: number; color: string }[]` | undefined
* **default**: undefined

**Returns**
* **colorStops** : `{ stop: number; color: string }[]` | undefined
---
### blur
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/blur

```javascript
block.blur(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **blur** : number
---
### brightness
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/brightness

```javascript
block.brightness(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **brightness** : number
---
### contrast
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/contrast


```javascript
block.contrast(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **contrast** : number
---
### dropShadow
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/drop-shadow

```javascript
block.dropShadow(option)
```

**Option**
* **type** : `[number, number, number, string]`
* **default**: undefined

**Returns**
* **dropShadow** : `[number, number, number, string]`
---
### grayscale
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/grayscale

```javascript
block.grayscale(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **grayscale** : number
---
### hueRotate
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/hue-rotate

```javascript
block.hueRotate(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **hueRotate** : number
---
### saturate
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/saturate


```javascript
block.saturate(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **saturate** : number
---
### sepia
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/sepia

```javascript
block.sepia(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **sepia** : number
---
### shadowBlur
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur

```javascript
block.shadowBlur(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **shadowBlur** : number
---
### shadowColor
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor

```javascript
block.shadowColor(option)
```

**Option**
* **type** : string
* **default**: undefined

**Returns**
* **shadowColor** : string
---
### shadowOffsetX
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX

```javascript
block.shadowOffsetX(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **shadowOffsetX** : number
---
### shadowOffsetY
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY

```javascript
block.shadowOffsetY(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **shadowOffsetY** : number
---
### fillText
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText

```javascript
block.fillText(option)
```

**Option**
* **type** : `{ text: string; x: number; y: number; maxWidth: number | undefined }`
* **default**: undefined

**Returns**
* **fillText** : `{ text: string; x: number; y: number; maxWidth: number | undefined }`
---
### strokeText
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText

```javascript
block.strokeText(option)
```

**Option**
* **type** : `{ text: string; x: number; y: number; maxWidth: number | undefined }`
* **default**: undefined

**Returns**
* **strokeText** : `{ text: string; x: number; y: number; maxWidth: number | undefined }`
---
### fontStretch
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fontStretch

```javascript
block.fontStretch(option)
```

**Option**
* **type** : "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded"
* **default**: undefined

**Returns**
* **fontStretch** : "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded"
---
### fontKerning
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fontKerning

```javascript
block.fontKerning(option)
```

**Option**
* **type** : "normal" | "auto" | "none"
* **default**: undefined

**Returns**
* **fontKerning** : "normal" | "auto" | "none"
---
### fontVariantCaps
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps

```javascript
block.fontVariantCaps(option)
```

**Option**
* **type** : "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps"
* **default**: undefined

**Returns**
* **fontVariantCaps** : "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps"
---
### textBaseline
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline

```javascript
block.textBaseline(option)
```

**Option**
* **type** : "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom"
* **default**: undefined

**Returns**
* **textBaseline** : "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom"
---
### textRendering
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textRendering

```javascript
block.textRendering(option)
```

**Option**
* **type** : "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision"
* **default**: undefined

**Returns**
* **textRendering** : "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision"
---
### wordSpacing
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/wordSpacing

```javascript
block.wordSpacing(option)
```

**Option**
* **type** : string | number
* **default**: undefined

**Returns**
* **wordSpacing** : number
---
### letterSpacing
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/letterSpacing

```javascript
block.letterSpacing(option)
```

**Option**
* **type** : string
* **default**: undefined

**Returns**
* **letterSpacing** : number
---
### direction
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction

```javascript
block.direction(option)
```

**Option**
* **type** : "ltr" | "rtl" | "inherit"
* **default**: undefined

**Returns**
* **direction** : "ltr" | "rtl" | "inherit"
---
### textAlign
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign

```javascript
block.textAlign(option)
```

**Option**
* **type** : "center" | "end" | "left" | "right" | "start"
* **default**: undefined

**Returns**
* **textAlign** : "center" | "end" | "left" | "right" | "start"
---
### clip
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip

```javascript
block.clip(option)
```

**Option**
* **type** : `{ path: Path2D | undefined; fillRule: CanvasFillRule | undefined }`
* **default**: undefined

**Returns**
* **clip** : `{ path: Path2D | undefined; fillRule: CanvasFillRule | undefined }`

---
### drawImage
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

```javascript
block.drawImage(option)
```

**Option**
* **type** : `{source: CanvasImageSource, x: number, y: number, width: number, height: number, clipX: number, clipY: number, clipWidth: number, clipHeight: number}`
* **default**: undefined

**Returns**
* **drawImage** : `{source: CanvasImageSource, x: number, y: number, width: number, height: number, clipX: number, clipY: number, clipWidth: number, clipHeight: number}`
---
### imageSmoothingEnabled
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled

```javascript
block.imageSmoothingEnabled(option)
```

**Option**
* **type** : boolean
* **default**: undefined

**Returns**
* **imageSmoothingEnabled** : boolean
---
### imageSmoothingQuality
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality

```javascript
block.imageSmoothingQuality(option)
```

**Option**
* **type** : "high" | "low" | "medium"
* **default**: undefined

**Returns**
* **imageSmoothingQuality** : "high" | "low" | "medium"
---
### globalAlpha
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha

```javascript
block.globalAlpha(option)
```

**Option**
* **type** : number | string
* **default**: undefined

**Returns**
* **globalAlpha** : number
---
### globalCompositeOperation
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

```javascript
block.globalCompositeOperation(option)
```

**Option**
* **type** : "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity"
* **default**: undefined

**Returns**
* **globalCompositeOperation** : "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity"
---

## Methods
### beginPath
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isbeginPath

```javascript
block.beginPath(option)
```

**Parameters**

**Returns**
---
### closePath
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isclosePath

```javascript
block.closePath(option)
```

**Parameters**

**Returns**
---
### measureText
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText

```javascript
block.measureText(option)
```

**Parameters**
* **text** : string

**Returns**
* **measureText** : TextMetrics
---
### pointInPath
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath

```javascript
block.pointInPath(point)
```
**Parameters**
* **point** : `{ x: number; y: number; path: Path2D | undefined; fillRule: CanvasFillRule | undefined }`

**Returns**
* **pointInPath** : boolean
---
### pointInStroke
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInStroke

```javascript
block.pointInStroke(option)
```

**Parameters**
* **point** : `{ x: number; y: number; path: Path2D | undefined }`

**Returns**
* **pointInStroke** : boolean