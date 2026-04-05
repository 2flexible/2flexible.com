import {LineExample, DraggableExample, BezierCurveExample, ControllableExample, StickyExample, JoinExample, CustomExample, ClosedExample} from '@site/src/examples/lineExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Line Block
Line blocks more usefull when you want to create bezire curves or line, and they come with addtional featurs like join, controlls, editable actions.

You can create straight line by passing start and end cordinates along x and y axis. 
```javascript
new LineBlock({width: 120, height: 120, lineType: "line", startX: 120, startY: 120, endX: 240, endY: 240, lineColor: "white", lineWidth: 30})
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<LineExample />
</CanvasBuilder>

## Bezire Curve
Line Blocks has cubic bezire linetype that you define controll points along x and y axis with `startControlX`, `startControlY`, `endControlX` and `endControlY` options.
```javascript
new LineBlock({...options, lineType: "cubicBezier", startControlX: 280, startControlY: 20, endControlX: 200, endControlY: 310})
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<BezierCurveExample />
</CanvasBuilder>


## Controllable
Controll points of cubic bezire can be disabled for start and end controlls with `startControllable` and `endControllable` options.
```javascript
new LineBlock({...options, startControllable: true, endControllable: false})
```
<CanvasBuilder id={"canvas4"} width={600} height={400}>
<ControllableExample />
</CanvasBuilder>

## Draggable
Start and end poinst of line block can be dragged along x and y axis.
```javascript
new LineBlock({...options, startDraggable: true, endDraggable: true, editable:true})
```
<CanvasBuilder id={"canvas2"} width={600} height={400}>
<DraggableExample />
</CanvasBuilder>

You can disable draggable and controllable featurs by setting `editable` false.


## Sticky
Start and end poinst of line block can be sticked to any block. You can define extra x and y value which values be start cordinates realted to sticked block.

```javascript
const startBlock = new RectangleBlock({...options})
const endBlock = new RectangleBlock({...options})

new LineBlock({...options, stickStart: {block: startBlock, x: startBlock.width(), y:startBlock.height()}}, stickEnd: {block: endBlock, x: 0, y:0}})
```
<CanvasBuilder id={"canvas5"} width={600} height={400}>
<StickyExample />
</CanvasBuilder>

## Join
Lines can be joined together for creating long lines and each of them will have their own controll points and options. 
In below example secondLine will join to first line to create bounded line.

```javascript
const firstLine = new LineBlock({...options})

const secondLine = new LineBlock({...options})

secondLine.join(firstLine)
```
<CanvasBuilder id={"canvas6"} width={600} height={400}>
<JoinExample />
</CanvasBuilder>

## Customizing
Lines style can easly customized with `lineColor` and  `lineWidth` options.

```javascript
new LineBlock({...options, lineColor: "red", lineWidth: "30px"})
```
<CanvasBuilder id={"canvas7"} width={600} height={400}>
<CustomExample />
</CanvasBuilder>

Additionally you can be close line start to end and define background.

```javascript
new LineBlock({...options, closeLine: true, backgroundColor: "red"})
```
<CanvasBuilder id={"canvas8"} width={600} height={400}>
<ClosedExample />
</CanvasBuilder>

