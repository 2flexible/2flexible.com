
import {CreateEventExample, MouseEnterExample, CrossingBlocksExample, ChildBlockExample, CustomEventExample} from '@site/src/examples/eventsExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Events
Blocks support default transformation events like resiziable, draggable, etc. which we see in [transformation](/docs/documentation/guide/transformation) section. Right now we are gonna create our events that blocks support, like mouse events, keyboard events etc.  

## Creating Event
Let's first start with a simple click event. For defining event you just need to use realted event method `click`, `mousemove`, `mousedown` etc. and pass callback function inside event mehtod.

:::info

It's important to pass `selectable` option as true, otherwise this events will not work. 

:::


```javascript
const rectBlock = new Reactangle({...options, selectable: true})

rectBlock.click((event)=>{
    rectBlock.set({"backgroundColor": "red"})
})
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<CreateEventExample />
</CanvasBuilder> 

Using `set` method on for changing `backgroundColor` option much more usefull becase set method does two things, sets [canvas history](/docs/documentation/advanced_features/canvas) and invokings changes to canvas for you to see changes after set applied.


Let's see in another example how mouseenter and mouseleave will interact with block.
```javascript
rectBlock.mouseenter((event)=>{
    rectBlock.set({"backgroundColor": "orange", rotate: 3.14})
})

rectBlock.mouseleave((event)=>{
    rectBlock.set({"backgroundColor": "blue", rotate: 0})
})
```

<CanvasBuilder id={"canvas2"} width={600} height={400}>
<MouseEnterExample />
</CanvasBuilder> 


If you have a two blocks that cross each other, only higher `zIndex` and `selectable: true` options has block's events will work.

```javascript
const rectBlock = new Reactangle({...options, selectable: true, zIndex: 33})
const underRect = new Reactangle({...options, selectable: true, zIndex: -1})

rectBlock.click((event)=>{
    rectBlock.set({"backgroundColor": "red"})
})

underRect.click((event)=>{
    underRect.set({"backgroundColor": "red"})
})
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<CrossingBlocksExample />
</CanvasBuilder> 


`Selectable` option also comes handy for deciding block's child events will work or stay calm. 

```javascript
const parentBlock = new Reactangle({...options, selectable: true, draggabe: true})
const childBlock = new Reactangle({...options, selectable: true})

childBlock.click((event)=>{
    childBlock.set({"backgroundColor": "red"})
})

parentBlock.addChild(childBlock)
```

<CanvasBuilder id={"canvas4"} width={600} height={400}>
<ChildBlockExample />
</CanvasBuilder> 


For in the above example you can see the `draggable` option not works beacuse child setted as `selectable`, but when you try to drag parent block it will work because mouse cursor not comes to the child boundry, so child event not triggering. 

## Custom Event
For custom events blocks provide `eventHandler` method which in its turn register this event for canvas in optimal way.
```javascript
const simpleRect = new Reactangle({...options, selectable: true})

const rectangelCustomClickEvent = (event) => {
    // for checking if rectangle in bound use checkInBound method
    const inBound = simpleRect.checkInBound(event)

    if(inBound){
        simpleRect.set({"backgroundColor": "red"})
    } else simpleRect.set({"backgroundColor": "blue"})

    // for updading canvas, you need call invokeChange method
    simpleRect.invokeChange()
}
```

<CanvasBuilder id={"canvas5"} width={600} height={400}>
<CustomEventExample />
</CanvasBuilder> 
