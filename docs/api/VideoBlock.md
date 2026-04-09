```javascript
new VideoBlock(video, {...options})
```
VideoBlock class is video animation inherted from `ShapeBlock` class. VideoBlock first property must be html video element. You can check [shape block api](/docs/api/ShapeBlock.md) for other options apply to VideoBlock. 

:::info

Keep in mind that because VideoBlock inherits from ShapeBlock, it can use some of the options of ShapeBlock.

:::

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