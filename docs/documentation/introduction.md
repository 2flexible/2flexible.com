import {SimpleRectangleExample, SimpleLayoutExample, SimpleShapeExample, ImageExample, CircleExample, SimpleTextExample, VideoExample} from '@site/src/examples/introductionExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Introduction

2flex is a too flexible canvas library that built upon a block philosophy.

Everything in canvas is a block of an element that you can customize its features too easily.
If you are familiar with css then you're gonna see lost of customization options in 
blocks are the same as the customizing an `<div>` element in CSS.

We have Block constructor which every blocks you are will see is inherited from this block.
If you want to create your own block you just need to inherit block then you good to go. [How to create your own block](/docs/documentation/advanced_features/custom_block)

## Getting started
First you need to construct a Canvas which you will later add all the blocks on this canvas to show everything.

You have to pass width, height and unique id string that gonna be a normal HTML id property in canvas.
Every canvas has its own id and these ids should be unique otherwise it's gonna cause a overlap canvas's.
[Want to know more about canvas features](/docs/documentation/advanced_features/canvas)

```javascript
const myCanvas = new Canvas(800, 400, "myCanvas")
```

After that you're will need to create block, there are many types of blocks for know we're gonna create simple rectangle block.
Every block x and y coordinates start from the top, left of the canvas, if you move canvas these coordinates will change relative to canvas
```javascript
const myFirstRectanlge = RectangleBlock({x: 10, y: 30, width: 100, height: 100, backgroundColor: "blue"})
```

Right now you are good to go, you just need to add this block into the canvas.
```javascript
myCanvas.add(myFirstRectanlge)
```


<CanvasBuilder id={"canvas1"} width={600} height={400}>
<SimpleRectangleExample />
</CanvasBuilder>

Canvas will take this rectangle block and draw it on the canvas.


### So what are exactly Blocks
The block itself comes with many builtin features like transforming resizing, dragging, rotating etc. 
and you can customize each of these features. [Learn more about the blocks](/docs/documentation/guide/the-block)

You can also create your own block just by inheriting Block class and you can use every feature of the block.
[How to create your own blocks](/docs/documentation/advanced_features/custom_block)
```javascript
class MyBlock extends Block {
    constructor(options) {
        super(options);
    }
    // you can define your option with methods, the method name will be the same as the option name, and the value will be passed as an argument to the method
    myOption(option) {
        // the value handler takes care of value caching and converting units, you just need to return the value you want to set for this option
        return super.__valueHandler(option, "myOption", default)
    }
}
```

There are many blocks are defined in the core package like LayoutBlock, ShapeBlocks, RectangleShape etc.
And there are shapes that comes out of the package which you can easily download by the npx command and 
after that you just need to import it and use.
[List of the blocks](/blocks)
```shell
npx 2flex add [block name]
```


The core package comes with the powerful blocks, which you are gonna use the construct your canvas drawings more easily.
### The Blocks

#### Layout Block
LayoutBlock for created grid or flexbox layouts in canvas, if you are familiar with the css this block more like a css layout.
It's powered with a many layout features exists in the css like align-items, justify-content, etc.
You just need to specify which layout type you need to use, after that you only need to add blocks into this layout block.
[You love grids and flexbox you will love LayoutBlock too.](/docs/documentation/guide/responsibility/#layout-blocks)

```javascript
const myLayout = new LayoutBlock({layout: "flex", justifyContent: "space-betwen", flexWrap: "wrap", width: 100, height: 40})

const myFirstBlock = new RectangleBlock({width: 100, height: 100, backgroundColor: "blue"})
const mySecondBlock = new RectangleBlock({width: 100, height: 100, backgroundColor: "red"})

myLayout.addChild(myFirstBlock, mySecondBlock)
```

<CanvasBuilder id={"canvas3"} width={600} height={400}>
<SimpleLayoutExample />
</CanvasBuilder>

#### Shape Block
Shape block helps you to create a shapes in canvas via context. 
You can define shapes with passing using shape's methods or options to create shows, or you can 
draw your shapes with `draw()` custom method this methods allow you to get access to context to use canvas
native 2d context api while continuing to use what block features.
[Shape block takes care of each drawing](/docs/documentation/advanced_features/custom_shape)

**How do create a shape with passing options**
```javascript
new ShapeBlock({x: 0, y: 0, width: 100, height: 100, rect: {x: 0, y:0, width: 100, height: 40}, fillStyle: "blue", fill: true, stroke:true})
```

**Drawing a shape with context**
```javascript
const myShapeBLock = new ShapeBlock({x: 0, y: 0, width: 100, height: 100})
myShapeBLock.draw((context: CanvasRenderingContext2D)=>{
    context.rect(0, 0, 100, 40)
    context.fillStyle = "blue"
    context.fill()
    context.stroke()
})
```

<CanvasBuilder id={"canvas11"} width={600} height={400}>
<SimpleShapeExample />
</CanvasBuilder>


You are also getting many commonly used shape blocks. [Want to know more about the shapes](/docs/documentation/shapes/rectangle)

**Circle Block**
```javascript
new CircleBlock({x: 0, y: 0, width: 100, height: 100, backgroundColor: "blue", radius: 10})
```
<CanvasBuilder id={"canvas6"} width={600} height={400}>
<CircleExample />
</CanvasBuilder>

**Text Block**
```javascript
new TextBlock("Hello World", {x: 0, y: 0, width: 100, height: 100, fontSize: 30})

```
<CanvasBuilder id={"canvas4"} width={600} height={400}>
<SimpleTextExample />
</CanvasBuilder>

**Image Block**
```javascript
new ImageBlock({x: 0, y: 0, width: 100, height: 100, backgroundColor: "blue", borderRadius: 10})
```
<CanvasBuilder id={"canvas5"} width={600} height={400}>
<ImageExample />
</CanvasBuilder>


**Video Block**
```javascript
new VideoBlock({x: 0, y: 0, width: 100, height: 100, backgroundColor: "blue", borderRadius: 10})
```
<CanvasBuilder id={"canvas7"} width={600} height={400}>
<VideoExample />
</CanvasBuilder>


### Hey you, want to try out how these blocks showing in the real canvas [check it out in playground](/)

You can read the guide the get more out of the these blocks features there are also advanced guides I recommend to you use it but still you gonna get enough of the context.



