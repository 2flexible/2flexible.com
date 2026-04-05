import {FixedExample, StickyExample, RelativeExample, AbsoluteExample} from '@site/src/examples/positionExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';


# Positions
Blocks positioning so similiar to css position property. Positioning little bit different from the css because we're modifing canvas's blocks in infinite canvas rather than html document. Blocks support static, fixed, sticky, relative and absolute positioning.

## Fixed
Block fixes in the given position relative to its canvas. If you give a child a fixed position it will do nothing.
In fixed position dragging will not work cause its bound to given the positions 

```javascript
new Reactangle({...options, position: "fixed", top: 44, left: 66})
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<FixedExample />
</CanvasBuilder>

## Sticky
While moving in the canvas if your sticky positions meets the given positions values such as `top`, `left`, etc. block cordinates will not change stays as sticky in the canvas. 
Block will not dragging if block meets to given positions instead it will stays as the stikc to these positions 

```javascript
new Reactangle({...options, position: "sticky", top: 50, left: 50})
```
<CanvasBuilder id={"canvas2"} width={600} height={400}>
<StickyExample />
</CanvasBuilder>

## Relative
Relative position take effect to the realted element. If a block added only into a canvas, it will take relateive position to the canvas. If the block is child of another block, then it will be realtive to this parent block.

```javascript
new Reactangle({...options, position: "relative", top: 0, right: 0})
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<RelativeExample />
</CanvasBuilder>


## Absolute
In an absolute position block doesn't behave as in a normal child block instead it get's out of the of its child and positions relative to the its canvas.

```javascript
new Reactangle({...options, absolute: "relative", bottom: 0, right: 0})
```
<CanvasBuilder id={"canvas4"} width={600} height={400}>
<AbsoluteExample />
</CanvasBuilder>
