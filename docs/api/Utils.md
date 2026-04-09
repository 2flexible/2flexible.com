2flex provides some of the utils functions that would be helpfull when building blocks.

### fromPercentage

Converting from percenatge to number. `parentSize` parameter must be related parent size. 

```javascript
fromPercentage(from, parentSize)
```

**Parameters**

* **from** : number
* **parentSize** : number

**Returns**

* **fromPercentage** : number

---

### fromVW

Converting from viewport's width to number. `parentWidth` parameter must be related parent size. 


```javascript
fromVW(from, parentWidth)
```

**Parameters**

* **from** : number
* **parentWidth** : number

**Returns**

* **fromVW** : number

---

### fromVH

Converting from viewport's height to number. `parentHeight` parameter must be related parent size. 


```javascript
fromVH(from, parentHeight)
```

**Parameters**

* **from** : number
* **parentHeight** : number

**Returns**

* **fromVH** : number

---

### fromRem

Converting from rem for relative parentSize size to number. `parentSize` parameter must be related parent size. Most of the time this `parentSize` should be size of root block or canvas.

```javascript
fromRem(from, parentSize)
```

**Parameters**

* **from** : number
* **parentSize** : number

**Returns**

* **fromRem** : number

---

### fromEm

Converting from em for relative parentSize size to number. `parentSize` parameter must be related parent size.

```javascript
fromEm(from, parentSize)
```

**Parameters**

* **from** : number
* **parentSize** : number

**Returns**

* **fromEm** : number

---

### fromCm

Converting from centimeter size to number. 


```javascript
fromCm(from)
```

**Parameters**

* **from** : number

**Returns**

* **fromCm** : number

---

### fromMm

Converting from millimeter size to number. 


```javascript
fromMm(from)
```

**Parameters**

* **from** : number

**Returns**

* **fromMm** : number

---

### fromQ

Converting from quarter-millimeters size to number. 


```javascript
fromQ(from)
```

**Parameters**

* **from** : number

**Returns**

* **fromQ** : number

---

### fromIn

Converting from inches size to number. 


```javascript
fromIn(from)
```

**Parameters**

* **from** : number

**Returns**

* **fromIn** : number

---

### fromPc

Converting from picas size to number. 


```javascript
fromPc(from)
```

**Parameters**

* **from** : number

**Returns**

* **fromPc** : number

---

### fromPt

Converting from points size to number. 


```javascript
fromPt(from)
```

**Parameters**

* **from** : number

**Returns**

* **fromPt** : number

---

### fromPx

Converting from pixels size to number. 


```javascript
fromPx(from)
```

**Parameters**

* **from** : number

**Returns**

* **fromPx** : number

---

### xIntersect

Checking if two boxes intersect each other on x axis.

```javascript
xIntersect(a, b)
```

**Parameters**

* **a** : `{ left: number; right: number }`
* **b** : `{ left: number; right: number }`

**Returns**

* **xIntersect** : number

---

### yIntersect

Checking if two boxes intersect each other on y axis.


```javascript
yIntersect(a, b)
```

**Parameters**

* **a** : `{ top: number; bottom: number }`
* **b** : `{ top: number; bottom: number }`

**Returns**

* **yIntersect** : number

---

### checkInBound

Check if the poinst (`pointX`, `pointY`) inside the the defined points (`px1`, `py1`, `px2`, `py2`, `px3`, `py3`, `px4`, `py4`)

```javascript
checkInBound(pointX, pointY, px1, py1, px2, py2, px3, py3, px4, py4)
```

**Parameters**

* **pointX** : number
* **pointY** : number
* **px1** : number
* **py1** : number
* **px2** : number
* **py2** : number
* **px3** : number
* **py3** : number
* **px4** : number
* **py4** : number

**Returns**

* **checkInBound** : boolean

---

### radianToDegree

Converting radian to degree.

```javascript
radianToDegree(rad)
```

**Parameters**

* **rad** : number

**Returns**

* **radianToDegree** : number

---

### degreeToRadian

Converting degree to degree.

```javascript
degreeToRadian(rad)
```

**Parameters**

* **rad** : number

**Returns**

* **degreeToRadian** : number

---

### rotateCordinates

Rotate `x` and `y` cordinates in given centers (`centerX`, `centerY`) relative to `radian` parameter.

```javascript
rotateCordinates(x, y, centerX, centerY, radian)
```

**Parameters**

* **x** : number
* **y** : number
* **centerX** : number
* **centerY** : number
* **radian** : number

**Returns**

* **rotateCordinates** : `{ x: number; y: number }`

---

### bezierEasing

Creates cubic bezire callback functions using for animations.

```javascript
bezierEasing(p1x, p1y, p2x, p2y)
```

**Parameters**

* **p1x** : number
* **p1y** : number
* **p2x** : number
* **p2y** : number

**Returns**

* **bezierEasing** : (t: number, duration: number) => number

---

### cubicBezier

Gives a point for given `t` property, for given polynomial cubic bezier function.

```javascript
cubicBezier(p0, p1, p2, p3, t)
```

**Parameters**

* **p0** : number
* **p1** : number
* **p2** : number
* **p3** : number
* **t** : number

**Returns**

* **cubicBezier** : number

---

### lerp

Linear Interpolation function which gives a point for given `t` property relative to `start` to `end` properties.

```javascript
lerp(start, end, t)
```

**Parameters**

* **start** : number
* **end** : number
* **t** : number

**Returns**

* **lerp** : number

---

### linear

Creates linear callback functions using for animations.

```javascript
linear(...args)
```

**Parameters**

* **args** : number[]

**Returns**

* **linear** : (t: number) => number

---

### steps

Creates steps callback functions using for animations.

```javascript
steps(step, position)
```

**Parameters**

* **step** : number
* **position** : JumpPosition

**Returns**

* **steps** : (t: number) => number

---

### clamp

Keeps `num` in boundries of `min` and `max` properties.

```javascript
clamp(num, min, max)
```

**Parameters**

* **num** : number
* **min** : number
* **max** : number

**Returns**

* **clamp** : number

---

### hexToRgba

Converting hexadecimal to Rgba (Red, Green, Blue, Alpha) value. 

```javascript
hexToRgba(hex)
```

**Parameters**

* **hex** : string

**Returns**

* **hexToRgba** : string

---

### hslToRgba

Converting hsl (Hue, Saturation, Luminance) to Rgba (Red, Green, Blue, Alpha) value. 


```javascript
hslToRgba(hsl)
```

**Parameters**

* **hsl** : string

**Returns**

* **hslToRgba** : string

---

### colorToRgba

Converting defined colors (black, silver, gray, white, maroon, red, purple, fuchsia, green, lime, olive, yellow, navy, blue, teal, aqua) to Rgba (Red, Green, Blue, Alpha) value. 

```javascript
colorToRgba(color)
```

**Parameters**

* **color** : string

**Returns**

* **colorToRgba** : string


  