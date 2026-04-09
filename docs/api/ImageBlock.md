```javascript
new ImageBlock(image, {...options})
```
ImageBlock class is image shape inherted from `ShapeBlock` class. ImageBlock first property must be string of image path or html image element.

:::info

Keep in mind that because ImageBlock inherits from ShapeBlock, it can use some of the options of ShapeBlock. You can check [shape block api](/docs/api/ShapeBlock.md) for other options apply to ImageBlock. 

:::

## Options

### clipX
Clipping image from left of the image in x axis. 

```javascript
block.clipX(option)
```

**Option**
* **type** : number | string
* **default**: 0

**Returns**
* **clipX** : number
---
### clipY
Clipping image from top of the image in y axis. 

```javascript
block.clipY(option)
```

**Option**
* **type** : number | string
* **default**: 0

**Returns**
* **clipY** : number
---
### clipWidth
Clipping image width from right of the image in x axis. 


```javascript
block.clipWidth(option)
```

**Option**
* **type** : number | string
* **default**: `width`

**Returns**
* **clipWidth** : number
---
### clipHeight
Clipping image height from bottom of the image in y axis. 

```javascript
block.clipHeight(option)
```

**Option**
* **type** : number | string
* **default**: `height`

**Returns**
* **clipHeight** : number
---
### objectFit
Fitting image into block boundaries relative to width and height with "contain", "cover", "fill" options.

```javascript
block.objectFit(option)
```

**Option**
* **type** : "contain" | "cover" | "fill"
* **default**: undefined

**Returns**
* **objectFit** : string
---
### repeatX
Repeating image in x axis by given amount or relative fitting to `width` of ImageBlock.

```javascript
block.repeatX(option)
```

**Option**
* **type** : number | "fill"
* **default**: undefined

**Returns**
* **repeatX** : number | string
---
### repeatY
Repeating image in y axis by given amount or relative to fitting `height` of ImageBlock.

```javascript
block.repeatY(option)
```

**Option**
* **type** : number | "fill"
* **default**: undefined

**Returns**
* **repeatY** : number | string
