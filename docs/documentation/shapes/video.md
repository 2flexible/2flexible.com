import {VideoExample, VideoRunExample} from '@site/src/examples/videoExample';
import CanvasBuilder from '@site/src/examples/CanvasBuilder';

# Video Block
Video block is a running animation in canvas. As in the html video tag you can use methods like `play`, `pause`, etc.

First this parameter of vide block is a video element, you need to pass video path to html video tag then use this video tag as video block source parameter.

```javascript
const video = document.createElement("video");
video.src = ".././src/test.mp4";
video.autoplay = true;

new VideoBlock(video, {width: 400, height: 500})
```
<CanvasBuilder id={"canvas1"} width={600} height={400}>
<VideoExample />
</CanvasBuilder>


## Controls
You can use `play` or `pause` options for videblock 

```javascript
...
const videoBlock = new VideoBlock(video, {...options})

videoBlock.play()
videoBlock.pause()
```
<CanvasBuilder id={"canvas2"} width={600} height={400}>
<VideoRunExample />
</CanvasBuilder>