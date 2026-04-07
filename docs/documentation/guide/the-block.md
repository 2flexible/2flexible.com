import {CustomizableCircle, EventCircle, SimpleRectangle, SimpleTransformRectangle, SimpleResponsibleRectangle, SimpleCustomizableRectangle, AnimatableRectangle} from '@site/src/examples/theBlockExamples';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# The Block
If you already read the [intrudoction](/docs/documentation/introduction) you know the blocks are the essential building block of the canvas.
The block comes with the many customizable features and even you can define your own block [how to create your own block](/docs/documentation/advanced_features/custom_block)

Defining simple block looks like this, you can define for each of block for easily identifiying them later   
```javascript
new Block({x: 0, y: 0, width: 100, height: 100})
```

If you place a block in a canvas it's always will show of the canvas in top left of the corner you where to put it. Be reminded that if you won't give
values for any options they gonna use their default values, for example width and height will be 0.
I will use rectangle block for now but you can choose whatever [block shape](/docs/documentation/advanced_features/custom_shape) you want.
```javascript
const myRectangle = new Reactangle({x: 0, y: 0, width: 100, height: 100})
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<SimpleRectangle />
</CanvasBuilder>

## Transformations
These blocks come with the default transformation features like resizing, rotating, dragging. As the default they all are 
false you need to make their values to true to use.

```javascript
new Reactangle({x: 0, y: 0, width: 100, height: 100,
    selectable: true,
    resizable: true, draggable: true, rotatable: true})
```
<CanvasBuilder id={"canvas2"} width={600} height={400}>
<SimpleTransformRectangle/>
</CanvasBuilder>


## Customizable

You can also customize many transformation features. [More of the customizing transformation features](/docs/documentation/advanced_features/customization)
```javascript
new Reactangle({x: 0, y: 0, width: 100, height: 100,
    resizeTop: false,
    resizeBottom: false,
    hotCornerStrokeColor: "red",
    selectable: true,
    resizable: true})
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<CustomizableCircle/>
</CanvasBuilder>

## Responsible
Blocks designed to be responsible, you can use minWidth, minHeight, maxWidth and maxHeight to control responsibility features. [Responsive blocks](/docs/documentation/guide/responsibility)
```javascript
new Reactangle({x: 0, y: 0, width: 100, height: 100,
    minWidth: 30,
    maxWidth: 60,
    selectable: true,
    resizable: true})
```
<CanvasBuilder id={"canvas4"} width={600} height={400}>
<SimpleResponsibleRectangle/>
</CanvasBuilder>

## More css features
More of the css styling features also apply to the blocks.
```javascript
const myRect = new Reactangle({width: 100, height: 100,
    selectable: true,
    padding: 40,
    margin: 20,
    position: "relative",
    overflow: "hidden",
    bottom: 20,
    zIndex: 9,
    resizable: true})

const childRect = new Reactangle({x: 10, y: 10, width: 100, height: 100, zIndex: 11})

myRect.addChild(childRect)
```
<CanvasBuilder id={"canvas5"} width={600} height={400}>
<SimpleCustomizableRectangle/>
</CanvasBuilder>

## Events
You can run events on the canvas, for example just like triggering button in the html you can do that on blocks too. [More events](/docs/documentation/guide/events)
```javascript
const myRect = new Reactangle({x: 0, y: 0, width: 100, height: 100, selectable: true, backgroundColor: "blue"})

const myText = new TextBlock({x: 0, y: 0, width: 100, height: 100, fontSize: 12})

let clicked = false
myRect.click((e)=>{
    clicked = !clicked
    let color = clicked ? "blue" : "red"
    myRect.set({"backgroundColor": color})
})
myRect.mouseover((e)=>{
    myText.addChild(myText)
})
myRect.mouseout((e)=>{
    myText.removeChild(myText)
})
```
<CanvasBuilder id={"canvas6"} width={600} height={400}>
<EventCircle/>
</CanvasBuilder>



## Animations
Block animations so easy to impliment, you just need to define your keyframes as well as trasnforamtions then give keyframe settings like `duration`, `easing`, etc. 
```javascript
const myRect = new Reactangle({width: 100, height: 100, backgroundColor: "aqua"})

myRect.aniamte({
    backgroundColor: ["aqua", "red", "blue"],
    duration: 5000,
    autoStart: true,
    iterations: 1,
    easing: "ease-in-out"
})
```
<CanvasBuilder id={"canvas7"} width={600} height={400}>
<AnimatableRectangle/>
</CanvasBuilder>