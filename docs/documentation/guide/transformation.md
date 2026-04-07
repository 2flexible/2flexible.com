import {RotatingExample, RotatingAxisExample, ResizingExample, ResizingFlipExample, ResizingCustomExample, RotationExample, ResizingMinMaxExample} from '@site/src/examples/transformationExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Transforamtion
We're gonna explore different block transformation featrues like draggable, resizable, rotatable.

## Draggable
Draggable basic transformation feature. You can simply enable this feature by passing **draggable** option as true in blocks.  
Additonally you can capture state of the block on drag event by passing callable function to  **onDrag** option.
:::warning

When you are using these transformation features you need to pass addtional **selectale** option as true. This will affect how you blocks beahve each other realted to zIndex. **More about styling [Styling Blocks](styling)**

:::

```javascript
function draggingAction() {
    console.log("dragging")
}
new Reactangle({...options, draggable: true, onDrag: draggingAction})
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<RotatingExample />
</CanvasBuilder>


You can determine which axis you want to drag your block. Try to drag rectangle block in x and y axis, see what axis changeing. In our example only y axis will change.

```javascript
new Reactangle({...options, dragX: false, dragY: true})
```
<CanvasBuilder id={"canvas2"} width={600} height={400}>
<RotatingAxisExample />
</CanvasBuilder>


## Resizing
Resizing comes as in bounding box with 8 corners resizing, four corners resizing (top-left, top-right, bottom-left, bottom-right) and four side resizing (top, left, bottom, right). These corners calling as **Hot Corners** in blocks, these corners more adjustable to modification you can customize them as you want. More about [Customizing hot corners]()

```javascript
new Reactangle({...options, resizable: true})
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<ResizingExample />
</CanvasBuilder>  


You must always define how much resizement you want to do in blocks. Otherwise blocks will not grow and shrink without `minWidth`, `maxWidth`, `minHeight` and `maxWidth` options. 

```javascript
new Reactangle({...options, resizable: true, maxWidth: Infinity, maxHeight: 160})
```
<CanvasBuilder id={"canvas33"} width={600} height={400}>
<ResizingMinMaxExample />
</CanvasBuilder>  


Blocks support vertical and horizontal flip resizing you just need to pass which fliping you want.

```javascript
new Reactangle({...options, horizontalFlipResize: true, verticalFlipResize: true})
```
<CanvasBuilder id={"canvas4"} width={600} height={400}>
<ResizingFlipExample />
</CanvasBuilder>  


You can disable some of the corner and side resizing on blocks.

```javascript
new Reactangle({...options, resizeTopLeft: false, resizeTop: false, resizeTopRight: false })
```
<CanvasBuilder id={"canvas5"} width={600} height={400}>
<ResizingCustomExample />
</CanvasBuilder>  

## Rotatable
Rotating coming in 4 hot corners (top-left, top-right, bottom-left, bottom-right). As in previus examples you can choose which side of rotations you want to control and you can listen whenever this rotaiton changes by `onRotate` option.

```javascript
function rotatingAction() {
    console.log("dragging")
}
new Reactangle({...options, rotatable: true,  onRotate: rotatingAction })
```

<CanvasBuilder id={"canvas6"} width={600} height={400}>
<RotationExample />
</CanvasBuilder>  