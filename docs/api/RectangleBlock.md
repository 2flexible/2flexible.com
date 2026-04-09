```javascript
new RectangleBlock({...options})
```
RectangleBlock class is rectangle shape inherted from `ShapeBlock` class.

:::info

Keep in mind that because RectangleBlock inherits from ShapeBlock, it can use some of the options of ShapeBlock. You can check [shape block api](/docs/api/ShapeBlock.md) for other options apply to RectangleBlock. 

:::

## Options

### backgroundColor
Background color defines color of background for rectangle shape.

```javascript
block.backgroundColor(option)
```

**Option**
* **type** : number
* **default**: undefined

**Returns**
* **backgroundColor** : number
---
### borderRadius
Border radius defines raidus of borders for rectangle shape.

```javascript
block.borderRadius(option)
```

**Option**
* **type** : number[] | number
* **default**: 0

**Returns**
* **borderRadius** : number[]
---
### borderStyle
Border style defines `solid` or `dotted` style of border for rectangle shape.

```javascript
block.borderStyle(option)
```

**Option**
* **type** : "solid" | "dotted"
* **default**: "solid"

**Returns**
* **borderStyle** : "solid" | "dotted"
---
### borderWidth
Border width defines size of border for rectangle shape.

```javascript
block.borderWidth(option)
```

**Option**
* **type** : number | string
* **default**: 0

**Returns**
* **borderWidth** : number
---
### borderColor
Border color defines color of border for rectangle shape.

```javascript
block.borderColor(option)
```

**Option**
* **type** : string
* **default**: "black"

**Returns**
* **borderColor** : string
---
### border
Border defines `borderWidth`, `borderStyle`, and `borderColor` in order for border for rectangle shape.

```javascript
block.border(option)
```

**Option**
* **type** : [`borderWidth`, `borderStyle`, `borderColor`] | string
* **default**: undefined

**Returns**
* **border** : [`borderWidth`, `borderStyle`, `borderColor`]
---
### borderTop
Border top defines `borderWidth`, `borderStyle`, and `borderColor` in order for top of border for rectangle shape.

```javascript
block.borderTop(option)
```

**Option**
* **type** : [`borderWidth`, `borderStyle`, `borderColor`] | string
* **default**: undefined

**Returns**
* **borderTop** : [`borderWidth`, `borderStyle`, `borderColor`]
---
### borderBottom
Border bottom defines `borderWidth`, `borderStyle`, and `borderColor` in order for bottom of border for rectangle shape.

```javascript
block.borderBottom(option)
```

**Option**
* **type** : [`borderWidth`, `borderStyle`, `borderColor`] | string
* **default**: undefined

**Returns**
* **borderBottom** : [`borderWidth`, `borderStyle`, `borderColor`]
---
### borderLeft
Border left defines `borderWidth`, `borderStyle`, and `borderColor` in order for left of border for rectangle shape.

```javascript
block.borderLeft(option)
```

**Option**
* **type** : [`borderWidth`, `borderStyle`, `borderColor`] | string
* **default**: undefined

**Returns**
* **borderLeft** : [`borderWidth`, `borderStyle`, `borderColor`]
---
### borderRight
Border right defines `borderWidth`, `borderStyle`, and `borderColor` in order for right of border for rectangle shape.

```javascript
block.borderRight(option)
```

**Option**
* **type** : [`borderWidth`, `borderStyle`, `borderColor`] | string
* **default**: undefined

**Returns**
* **borderRight** : [`borderWidth`, `borderStyle`, `borderColor`]
