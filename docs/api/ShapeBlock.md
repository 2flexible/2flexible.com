```javascript
new ShapeBlock(options)
```
ShapeBlock class inherted from Block class and helps to define shapes in canvas. You can inhert this ShapeBlock class to create your own shape. ShapeBlock gives you list of options for creating custom shapes or instead you can use `draw` method to define shapes.

## Options

### draw
Draw method helps to create shapes with callback function that takes context.
```javascript
block.draw(option)
```

**Option**
* **type** : `(context: CanvasRenderingContext2D) => void` | undefined
* **default**: undefined

**Returns**
* **draw** : void
---
### fill
Fill option fills current context or given path. This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill
```javascript
block.fill(option)
```

**Option**
* **type** : `{ fill: boolean, path: Path2D | undefined, fillRule: "evenodd" | "nonzero" }` | undefined
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
* **type** : string | CanvasGradient | CanvasPattern | undefined
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
* **type** : `{ stroke: boolean, path: Path2D | undefined }` | undefined
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
* **type** : string | CanvasGradient | CanvasPattern | undefined
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
* **type** : `{ x: number; y: number }` | undefined
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
* **type** : number | undefined
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
* **type** : number[] | undefined
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
* **type** : number | undefined
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
* **type** : "butt" | "round" | "square" | undefined
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
* **type** : "miter" | "round" | "bevel" | undefined
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
* **type** : `{ cpx1: number; cpy1: number; cpx2: number; cpy2: number; endX: number; endY: number }` | undefined
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
* **type** : `{ cpx1: number; cpy1: number; endX: number; endY: number }` | undefined
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
* **type** : `{x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean | undefined}` | undefined
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
* **type** : `{x1: number, y1: number, x2: number, y2: number, radius: number}` | undefined
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
* **type** : `{x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean | undefined}` | undefined
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
* **type** : `{ x: number; y: number; width: number; height: number }` | undefined
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
* **type** : `{ x: number; y: number; width: number; height: number; borderRadius: number[] }` | undefined
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
* **type** : `{ x: number; y: number; width: number; height: number }` | undefined
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
* **type** : `{ x: number; y: number }` | undefined
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
* **type** : `{ x0: number; y0: number; r0: number; x1: number; y1: number; r1: number }` | undefined
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
* **type** : `{ x0: number; y0: number; x1: number; y1: number }` | undefined
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
* **type** : `{ angle: number; x: number; y: number }` | undefined
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
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **blur** : number | undefined
---
### brightness
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/brightness

```javascript
block.brightness(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **brightness** : number | undefined
---
### contrast
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/contrast


```javascript
block.contrast(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **contrast** : number | undefined
---
### dropShadow
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/drop-shadow

```javascript
block.dropShadow(option)
```

**Option**
* **type** : `[number | string, number | string, number | string, string]` | undefined
* **default**: undefined

**Returns**
* **dropShadow** : `[number, number, number, string]` | undefined
---
### grayscale
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/grayscale

```javascript
block.grayscale(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **grayscale** : number | undefined
---
### hueRotate
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/hue-rotate

```javascript
block.hueRotate(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **hueRotate** : number | undefined
---
### saturate
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/saturate


```javascript
block.saturate(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **saturate** : number | undefined
---
### sepia
This method based on https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/sepia

```javascript
block.sepia(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **sepia** : number | undefined
---
### shadowBlur
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur

```javascript
block.shadowBlur(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **shadowBlur** : number | undefined
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
* **shadowColor** : string | undefined
---
### shadowOffsetX
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX

```javascript
block.shadowOffsetX(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **shadowOffsetX** : number | undefined
---
### shadowOffsetY
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY

```javascript
block.shadowOffsetY(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **shadowOffsetY** : number | undefined
---
### fillText
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText

```javascript
block.fillText(option)
```

**Option**
* **type** : `{ text: string; x: number; y: number; maxWidth: number | undefined }` | undefined
* **default**: undefined

**Returns**
* **fillText** : `{ text: string; x: number; y: number; maxWidth: number | undefined }` | undefined
---
### strokeText
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText

```javascript
block.strokeText(option)
```

**Option**
* **type** : `{ text: string; x: number; y: number; maxWidth: number | undefined }` | undefined
* **default**: undefined

**Returns**
* **strokeText** : `{ text: string; x: number; y: number; maxWidth: number | undefined }` | undefined
---
### fontStretch
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fontStretch

```javascript
block.fontStretch(option)
```

**Option**
* **type** : "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | undefined
* **default**: undefined

**Returns**
* **fontStretch** : "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | undefined
---
### fontKerning
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fontKerning

```javascript
block.fontKerning(option)
```

**Option**
* **type** : "normal" | "auto" | "none" | undefined
* **default**: undefined

**Returns**
* **fontKerning** : "normal" | "auto" | "none" | undefined
---
### fontVariantCaps
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps

```javascript
block.fontVariantCaps(option)
```

**Option**
* **type** : "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps" | undefined
* **default**: undefined

**Returns**
* **fontVariantCaps** : "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps" | undefined
---
### textBaseline
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline

```javascript
block.textBaseline(option)
```

**Option**
* **type** : "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom" | undefined
* **default**: undefined

**Returns**
* **textBaseline** : "alphabetic" | "top" | "hanging" | "middle" | "ideographic" | "bottom" | undefined
---
### textRendering
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textRendering

```javascript
block.textRendering(option)
```

**Option**
* **type** : "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | undefined
* **default**: undefined

**Returns**
* **textRendering** : "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | undefined
---
### wordSpacing
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/wordSpacing

```javascript
block.wordSpacing(option)
```

**Option**
* **type** : string | number | undefined
* **default**: undefined

**Returns**
* **wordSpacing** : number | undefined
---
### letterSpacing
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/letterSpacing

```javascript
block.letterSpacing(option)
```

**Option**
* **type** : string | undefined
* **default**: undefined

**Returns**
* **letterSpacing** : number | undefined
---
### direction
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction

```javascript
block.direction(option)
```

**Option**
* **type** : "ltr" | "rtl" | "inherit" | undefined
* **default**: undefined

**Returns**
* **direction** : "ltr" | "rtl" | "inherit" | undefined
---
### textAlign
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign

```javascript
block.textAlign(option)
```

**Option**
* **type** : "center" | "end" | "left" | "right" | "start" | undefined
* **default**: undefined

**Returns**
* **textAlign** : "center" | "end" | "left" | "right" | "start" | undefined
---
### clip
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip

```javascript
block.clip(option)
```

**Option**
* **type** : `{ path: Path2D | undefined; fillRule: CanvasFillRule | undefined }` | undefined
* **default**: undefined

**Returns**
* **clip** : `{ path: Path2D | undefined; fillRule: CanvasFillRule | undefined }` | undefined

---
### drawImage
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage

```javascript
block.drawImage(option)
```

**Option**
* **type** : `{source: CanvasImageSource, x: number, y: number, width: number, height: number, clipX: number, clipY: number, clipWidth: number, clipHeight: number}` | undefined
* **default**: undefined

**Returns**
* **drawImage** : `{source: CanvasImageSource, x: number, y: number, width: number, height: number, clipX: number, clipY: number, clipWidth: number, clipHeight: number}` | undefined
---
### imageSmoothingEnabled
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled

```javascript
block.imageSmoothingEnabled(option)
```

**Option**
* **type** : boolean | undefined
* **default**: undefined

**Returns**
* **imageSmoothingEnabled** : boolean | undefined
---
### imageSmoothingQuality
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality

```javascript
block.imageSmoothingQuality(option)
```

**Option**
* **type** : "high" | "low" | "medium" | undefined
* **default**: undefined

**Returns**
* **imageSmoothingQuality** : "high" | "low" | "medium" | undefined
---
### globalAlpha
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha

```javascript
block.globalAlpha(option)
```

**Option**
* **type** : number | string | undefined
* **default**: undefined

**Returns**
* **globalAlpha** : number | undefined
---
### globalCompositeOperation
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

```javascript
block.globalCompositeOperation(option)
```

**Option**
* **type** : "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | undefined
* **default**: undefined

**Returns**
* **globalCompositeOperation** : "source-over" | "source-in" | "source-out" | "source-atop" | "destination-over" | "destination-in" | "destination-out" | "destination-atop" | "lighter" | "copy" | "xor" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity" | undefined
---

## Methods
### beginPath
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isbeginPath

```javascript
block.beginPath(option)
```

**Parameters**

**Returns**
* **animationStart** : void

---
### closePath
This method based on https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isclosePath

```javascript
block.closePath(option)
```

**Parameters**

**Returns**
* **animationStart** : void

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