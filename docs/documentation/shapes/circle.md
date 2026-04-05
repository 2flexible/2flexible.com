import {CircleExample, CircleRadiusExample, CircleAnglesExample, CircleInnerAngleExample, CircleCustomExample, CircleBorderExample} from '@site/src/examples/circleExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Circle Block

You simply need to give width, height and these values will define diameters of circle block.
```javascript
new CircleBlock({width: 120, height: 60, backgroundColor: "black"})
```


<CanvasBuilder id={"canvas1"} width={600} height={400}>
<CircleExample />
</CanvasBuilder>


## Custom Radius
For creating something like elipse shape you can define different diameters with width and height on circle block.
```javascript
new CircleBlock({...options, width: 50, height: 120})
```


<CanvasBuilder id={"canvas2"} width={600} height={400}>
<CircleRadiusExample />
</CanvasBuilder>


## Angles
You can define start and end point of circle block angle with `startAngle` and `endAngle` options.  
```javascript
new CircleBlock({...options, startAgnle: 0, endAngle: Math.PI})
```


<CanvasBuilder id={"canvas3"} width={600} height={400}>
<CircleAnglesExample />
</CanvasBuilder>

## Inner Radius

Inner radius can create pie like shapes with `startAngle` and `endAngle` options in circle block.
```javascript
new CircleBlock({...options, startAgnle: 0, endAngle: Math.PI, innerRadius: 15})
```

<CanvasBuilder id={"canvas4"} width={600} height={400}>
<CircleInnerAngleExample />
</CanvasBuilder>


## Border
As in the rectangle block example circles also support border option.
```javascript
new CircleBlock({...options, border: "30px solid white"})
```

<CanvasBuilder id={"canvas6"} width={600} height={400}>
<CircleBorderExample />
</CanvasBuilder>