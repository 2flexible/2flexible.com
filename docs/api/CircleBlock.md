```javascript
new CircleBlock(options)
```
CircleBlock class is circle shape inherted from `ShapeBlock` class.

:::info

Keep in mind that because CircleBlock inherits from ShapeBlock, it can use some of the options of ShapeBlock. You can check [shape block api](/docs/api/ShapeBlock.md) for other options apply to CircleBlock. 

:::

## Options

### startAngle
Start angle in radians of circle shape, measured from the positive x-axis. 

```javascript
block.startAngle(option)
```

**Option**
* **type** : number | string | undefined
* **default**: 0

**Returns**
* **startAngle** : number
---
### endAngle
End angle in radians of circle shape, measured from the positive x-axis. 

```javascript
block.endAngle(option)
```

**Option**
* **type** : number | string | undefined
* **default**: Math.PI * 2

**Returns**
* **endAngle** : number

---
### innerRadius
Inner radius of circle in circle shape. Inner radius helps you create shapes line donat.  

```javascript
block.innerRadius(option)
```

**Option**
* **type** : number | string | undefined
* **default**: 0

**Returns**
* **innerRadius** : number
---
### backgroundColor
Background color defines color of background for circle shape.

```javascript
block.backgroundColor(option)
```

**Option**
* **type** : number | undefined
* **default**: undefined

**Returns**
* **backgroundColor** : number | undefined
---
### borderStyle
Border style defines `solid` or `dotted` style of border for circle shape.

```javascript
block.borderStyle(option)
```

**Option**
* **type** : "solid" | "dotted" | undefined
* **default**: "solid"

**Returns**
* **borderStyle** : "solid" | "dotted"
---
### borderWidth
Border width defines size of border for circle shape.

```javascript
block.borderWidth(option)
```

**Option**
* **type** : number | string | undefined
* **default**: 0

**Returns**
* **borderWidth** : number
---
### borderColor
Border color defines color of border for circle shape.

```javascript
block.borderColor(option)
```

**Option**
* **type** : string | undefined
* **default**: "black"

**Returns**
* **borderColor** : string

---
### border
Border defines `borderWidth`, `borderStyle`, and `borderColor` in order for border for circle shape.

```javascript
block.border(option)
```

**Option**
* **type** : [`borderWidth`, `borderStyle`, `borderColor`] | string | undefined
* **default**: undefined

**Returns**
* **border** : [`borderWidth`, `borderStyle`, `borderColor`] | undefined