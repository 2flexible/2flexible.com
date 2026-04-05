import {ImageExample, ImageCuttingExample, ImageFitExample, ImageRepateExample, CustomImgeExample} from '@site/src/examples/imageExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Image Block
Image blocks both combine canvas `drawImage()` method and css `objectFit` property features.

Image blocks accepts as first parameter, string path of the image file as well as `URL` as in the html image `src` attribute.

```javascript
// Or you can just pass https://somesource/image.jpg
new ImageBlock("../image.png", {width: 120, height: 60})
```

<CanvasBuilder id={"canvas1"} width={600} height={400}>
<ImageExample />
</CanvasBuilder>

## Clipping
Images can be cliped from top left to bottom right with `clipX`, `clipY`, `clipWidth`, and `clipHeight` options.  
```javascript
new ImageBlock("../image.png", {...options, clipX: 30, clipWidth: 50, clipY: 20, clipHeight: 40})
```

<CanvasBuilder id={"canvas2"} width={600} height={400}>
<ImageCuttingExample />
</CanvasBuilder>

## Object Fit
Image blocks `objectFit` option apply same features as in the css objectFit property. ObjectFit comes in `contain`, `cover`, and `fill` parameters. In `contain` parameter image will be adjusted to respect of aspect ratio of width and height, `cover` will take image original size, and fill going to fit to the size of image block.

```javascript
new ImageBlock("../image.png", {...options, objectFit: "contain" || "cover" || "fill"})
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<ImageFitExample />
</CanvasBuilder>


## Repeat
Images can be repeated inside of the image block for filling block's width or height, or you can just give how much repeat you like on both x and y axis.

```javascript
new ImageBlock("../image.png", {...options, repeatX: "fill", repeatY: 2})
```
<CanvasBuilder id={"canvas4"} width={600} height={400}>
<ImageRepateExample />
</CanvasBuilder>


## Smoothing
You can use `smoothing`, `smoothingQuality` options for additional performance gain in canvas.

```javascript
new ImageBlock("../image.png", {...options, smoothing: true, smoothingQuality: "low"})
```
<CanvasBuilder id={"canvas5"} width={600} height={400}>
<CustomImgeExample />
</CanvasBuilder>