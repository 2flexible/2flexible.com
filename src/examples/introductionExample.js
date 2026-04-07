import {
    CircleBlock,
    LayoutBlock,
    RectangleBlock,
    ImageBlock,
    VideoBlock,
    TextBlock,
    ShapeBlock,
} from "@2flexible/2flex";

import CatSampleVideo from "@site/static/video/cat.mp4";

export function SimpleRectangleExample() {
    const parentBlock = new RectangleBlock({
        width: 120,
        height: 80,
        backgroundColor: "blue",
        selectable: true,
        draggable: true,
    });
    return [parentBlock];
}

export function SimpleLayoutExample() {
    const rect1 = new RectangleBlock({
        width: 160,
        height: 90,
        backgroundColor: "blue",
    });

    const rect2 = new RectangleBlock({
        width: 100,
        height: 40,
        backgroundColor: "red",
    });
    const rect3 = new RectangleBlock({
        width: 120,
        height: 50,
        backgroundColor: "orange",
    });
    const layout = new LayoutBlock({
        width: 300,
        height: 100,
        selectable: true,
        draggable: true,
        maxWidth: Infinity,
        resizable: true,
    });
    layout.addChild(rect1, rect2, rect3);
    return [layout];
}

export function SimpleShapeExample() {
    const shape = new ShapeBlock({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        fillStyle: "blue",
        fill: true,
        stroke: true,
        selectable: true,
        draggable: true,
    });
    shape.draw((context) => {
        context.rect(shape.x(), shape.y(), 100, 40);
        context.fillStyle = "blue";
        context.fill();
        context.stroke();
    });
    return [shape];
}

export function ImageExample() {
    const image = new ImageBlock(
        "https://preview.redd.it/please-upload-a-silly-photo-angle-of-your-cat-heres-mine-v0-dof4y1gotqce1.jpeg?width=640&crop=smart&auto=webp&s=09415d5da5de1cb894e798e7ab6f5abb6075285d",
        {
            width: 300,
            height: 300,
            x: "23%",
            y: "13%",
            objectFit: "fill",
            selectable: true,
            draggable: true,
        }
    );
    return [image];
}

export function CircleExample() {
    const simpleCircle = new CircleBlock({
        width: 60,
        height: 60,
        backgroundColor: "orange",
        x: "30%",
        y: "30%",
    });
    return [simpleCircle];
}

export function SimpleTextExample() {
    const text = new TextBlock("Hello World", {
        width: 120,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        fontSize: "80px",
    });
    return [text];
}

export function VideoExample() {
    const video = document.createElement("video");

    video.src = CatSampleVideo;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.play();
    const sampleVideoExample = new VideoBlock(video, {
        width: 300,
        height: 300,
        x: "23%",
        y: "13%",
        objectFit: "fill",
        selectable: true,
        draggable: true,
    });
    return [sampleVideoExample];
}
