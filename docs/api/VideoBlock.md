```javascript
new VideoBlock(video, options)
```
VideoBlock class is video animation inherted from `ShapeBlock` class. VideoBlock first property must be html video element. You can check [shape block api](/docs/api/ShapeBlock.md) for other options apply to VideoBlock. 

:::info

Keep in mind that because VideoBlock inherits from ShapeBlock, it can use some of the options of ShapeBlock.

:::

### source
Source defines video playable source that must be video html element.

```javascript
block.source(option)
```

**Option**
* **type** : HTMLVideoElement | undefined
* **default**: undefined

**Returns**
* **source** : HTMLVideoElement | undefined
---
### autoPlay
Video animation will play automatically when added to canvas.

```javascript
block.autoPlay(option)
```

**Option**
* **type** : boolean
* **default**: false

**Returns**
* **autoPlay** : boolean
---
### onPlay
Video animation will play automatically when added to canvas.

```javascript
block.onPlay(option)
```

**Option**
* **type** : func?: (timestamp: number) => void | undefined
* **default**: undefined

**Returns**
* **onPlay** : func?: (timestamp: number) => void | undefined


## Methods

### play

```javascript
block.play()
```

**Parameters**

**Returns**
* **play** : void
---
### pause

```javascript
block.pause()
```

**Parameters**

**Returns**
* **pause** : void