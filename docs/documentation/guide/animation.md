import {HeartAnimationExample, DirectonExample, IternationExample, CompositeExample, EasingExample, ControlsAnimation, DelayExample, IterStartExample} from '@site/src/examples/animationExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Animation
Aniamtions in blocks are so easy to impliment, you just need to use `animate` method and define your keyframes. Animate method takes keyframe and callback function where you can define custom animations in given time as you like. 

When you define animation you need to pass keyframes. In our example we're moving from 0 to 100 along x axis in 5 seconds using cubic bezire of easeing option. 
```javascript
const simpleRectangle = new Reactangle({width: 120, height: 60, backgroundColor: "black"})

const animationId = rect.animate({x: [0, 100], autoStart: true, duration: 5000, easing: "ease"})

console.log(animationId)
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<HeartAnimationExample />
</CanvasBuilder>

When you define animation you get animation id of this animation which you can later use for controlling this animation parameters.

## Directon
Animations can be played normal in which every time each keyframe will be started from start value.
```javascript
rect.animate({...options, direction: "normal"})
```

You can use alternate option for not interupting to going back again just moving where you lasted on keyframe value.
```javascript
rect.animate({...options, direction: "alternate"})
```

Reverse much like same but now animatioin over keyframe values will start from end. 
```javascript
rect.animate({...options, direction: "reverse"})
```

<CanvasBuilder id={"canvas2"} width={600} height={400}>
<DirectonExample />
</CanvasBuilder>

## Iterations
Animations can be simply define how many times will repaet by defining iteration value. Iterations can be number or Infinity value where your animation will run infinitly.

```javascript
rect.animate({...options, iterations: 3})
// or
rect.animate({...options, iterations: Infinity})
```
<CanvasBuilder id={"canvas3"} width={600} height={400}>
<IternationExample />
</CanvasBuilder>

## Composite
When you define keyframes on your animation you can simply saying run one transformation then another this behaiver is replace value of `composite` method which is default in block animation. 
```javascript
rect.animate({...options, composite: "replace"})
```

You can simply change default behavier to run transforamtions together by using add on `composite` option.
```javascript
rect.animate({...options, composite: "add"})
```

And last but not least you have accumulate option to use which in its turn adds up previus values of transformation to next values. For example you define transoframtion like `y: [50, 20, 80]`, in this example your first iteration will end in 80 y axis, in next intereation your values start from where it ended, your y axis transformation will look like this `y: [(50+80), (20+80), (80+80)]`. It will grok infinity if your animation `iterations` option is Infinity. 
```javascript
rect.animate({...options, composite: "accumulate"})
```
<CanvasBuilder id={"canvas4"} width={900} height={400}>
<CompositeExample />
</CanvasBuilder>


## Easing
Block animations support different easing modes like linear, steps, cubic-bezier. Easing affect by given `duration` and `playbackRate` options.
```javascript
rect.animate({...options, easing: "linear"})
```

For speed uping your animation you can change `duration` and `playbackRate`.
```javascript
rect.animate({...options, easing: "ease-in", duration: 5000, playbackRate: 1.5})
```

Blocks provide additional methods for defining custom `linear`, `steps`, and `cubicBezier`.
```javascript
const rect = new RectangleBlock({width: 100, height: 100, backgroundColor: "blue"});

const line2 = new LineBlock({x: 200, y: 110, lineType: "cubicBezier", width: 100, height: 100, startX: 100, startY: 100, startControlX: 120, startControlY: 220, endControlX: 320, endControlY: 220, endX: 330, endY: 320, lineColor: "white", lineWidth: 40});

const animationCallBack = (t, ease) => {
    const xPoint = cubicBezier(
        line2.startX(),
        line2.startControlX(),
        line2.endControlX(),
        line2.endX(),
        ease
    );
    const yPoint = cubicBezier(
        line2.startY(),
        line2.startControlY(),
        line2.endControlY(),
        line2.endY(),
        ease
    );
    rect.x(xPoint);
    rect.y(yPoint);
}
rect.animate({autoStart: true, composite: "add", duration: 2000, easing: bezierEasing(0.1, 0.9, 0.9, 0.1), iterations: Infinity},animationCallBack);
```
Callback function takes timestamp which is the current timestamp and in the given time easing output of selected easing opton e.g. `ease`. In our example we're moved alongside with our current line.

<CanvasBuilder id={"canvas5"} width={900} height={400}>
<EasingExample />
</CanvasBuilder>


## Controls
If we don't pass autoStart option it will not start until we use `animationStart(id)` method with animation id. You get animation id when you define animation, or you can define id for your animation.

```javascript
const simpleRectangle = new Reactangle({width: 120, height: 60, backgroundColor: "black"})

const animationId = rect.animate({...keyframeOptions, id: "myFirstAnimation"})

if(animationId === "myFirstAnimation") simpleRectangle.animationStart("myFirstAnimation")
```

<CanvasBuilder id={"canvas6"} width={900} height={400}>
<ControlsAnimation />
</CanvasBuilder>

Additinally you stop animation with `animationStop` or finish animation with `animationFinish`. You can conter other parametrs like `animationDirection`, `animatonDelay`, `animationReverse` etc. See [Block animation api]() for more information.


If you want to give a delay for your animation you can use `delay` option which is takes milliseconds. In our example animation will start working after 2 seconds.
```javascript
rect.animate({...options, delay: 2000})
```


<CanvasBuilder id={"canvas7"} width={900} height={400}>
<DelayExample />
</CanvasBuilder>

You can change where to start animation on defined keyframes with `iterationStart` option. For example we want to start animation in half of transformation.
```javascript
rect.animate({...options, iterationStart: 0.5})
```

<CanvasBuilder id={"canvas8"} width={900} height={400}>
<IterStartExample />
</CanvasBuilder>
