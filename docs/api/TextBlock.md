```javascript
new TextBlock("text", options)
```
TextBlock class is text shape inherted from `ShapeBlock` class. TextBlock first property must be text string.

:::info

Keep in mind that because TextBlock inherits from ShapeBlock, it can use some of the options of ShapeBlock. You can check [shape block api](/docs/api/ShapeBlock.md) for other options apply to TextBlock. 

:::

## Options

### text
Define text in string for text shape.

```javascript
block.text(option)
```

**Option**
* **type** : string | undefined
* **default**: ""

**Returns**
* **text** : string
---
### color
Color width defines width of fill color for text shape

```javascript
block.color(option)
```

**Option**
* **type** : string | undefined
* **default**: undefined

**Returns**
* **color** : string | undefined
---
### strokeWidth
Stroke width defines width of stroke for text shape

```javascript
block.strokeWidth(option)
```

**Option**
* **type** : number | undefined
* **default**: 0

**Returns**
* **strokeWidth** : number
---
### strokeColor
Stroke Color defines color of stroke for text shape

```javascript
block.strokeColor(option)
```

**Option**
* **type** : string | undefined
* **default**: undefined

**Returns**
* **strokeColor** : string | undefined
---
### fontFamily
Font family defines font family of text shape.

```javascript
block.fontFamily(option)
```

**Option**
* **type** : string | undefined
* **default**: "sans-serif"

**Returns**
* **fontFamily** : string
---
### fontWeight
Font Weight defines font weight of text shape. Font weight depends on the font famliy.

```javascript
block.fontWeight(option)
```

**Option**
* **type** : "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined
* **default**: "normal"

**Returns**
* **fontWeight** : "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
---
### fontSize
Font Size defines font size of text shape. 

```javascript
block.fontSize(option)
```

**Option**
* **type** : string | number | undefined
* **default**: 0

**Returns**
* **fontSize** : number
---
### fontStyle
Font Style defines font style of text shape. 

```javascript
block.fontStyle(option)
```

**Option**
* **type** : "normal" | "italic" | "oblique" | undefined
* **default**: "normal"

**Returns**
* **fontStyle** : "normal" | "italic" | "oblique"
---
### fontVariant
Font Variant defines font variant of text shape. 

```javascript
block.fontVariant(option)
```

**Option**
* **type** : "normal" | "small-caps" | undefined
* **default**: "normal" 

**Returns**
* **fontVariant** : "normal" | "small-caps"
---
### editable
Editable property adds a event for modifiying text for TextBlock.

```javascript
block.editable(option)
```

**Option**
* **type** : boolean | undefined
* **default**: false

**Returns**
* **editable** : boolean
---
### onEdit
Given callback function to `onEdit` option works while editable is true.  

```javascript
block.onEdit(option)
```

**Option**
* **type** : () => void | undefined
* **default**: undefined

**Returns**
* **onEdit** : () => void | undefined
---
### resizeLineHeight
Text height can be resized without buinding to height.

```javascript
block.resizeLineHeight(option)
```

**Option**
* **type** : boolean | undefined
* **default**: false

**Returns**
* **resizeLineHeight** : boolean
---
### wrap
Text can be wrapped in letters or words relative to width. Default value `nowrap` which is no wrapping applies to text. 

```javascript
block.wrap(option)
```

**Option**
* **type** : "nowrap" | "letter" | "word" | undefined
* **default**: "nowrap"

**Returns**
* **wrap** : "nowrap" | "letter" | "word"
