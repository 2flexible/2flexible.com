import {
    LayoutBlock,
    RectangleBlock,
    TextBlock,
    VideoBlock,
} from "@2flexible/2flex";
import CatSampleVideo from "@site/static/video/cat.mp4";

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

export function VideoRunExample() {
    const video = document.createElement("video");

    video.src = CatSampleVideo;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    const sampleVideoExample = new VideoBlock(video, {
        width: 300,
        height: 300,
        x: "23%",
        y: "13%",
        objectFit: "fill",
        selectable: true,
        draggable: true,
    });

    const playButton = new RectangleBlock({
        width: 70,
        height: 30,
        padding: [8, 20],
        borderRadius: 12,
        backgroundColor: "#696969",
        border: "4px solid #a3a3a3",
        selectable: true,
        hotLines: false,
    });

    const playText = new TextBlock("Play", {
        width: "100%",
        height: "100%",
        fontSize: "14px",
        color: "white",
        fontWeight: 500,
    });
    playButton.addChild(playText);

    const pauseButton = new RectangleBlock({
        width: 70,
        height: 30,
        padding: [8, 15],
        borderRadius: 12,
        backgroundColor: "#696969",
        border: "4px solid #a3a3a3",
        selectable: true,
        hotLines: false,
    });

    const pauseText = new TextBlock("Pause", {
        width: "100%",
        height: "100%",
        fontSize: "14px",
        color: "white",
        fontWeight: 500,
    });
    playButton.addChild(playText);
    pauseButton.addChild(pauseText);

    const buttonsLayout = new LayoutBlock({
        width: 140,
        height: 30,
        gap: 10,
        position: "absolute",
        top: 12,
        right: 20,
    });
    buttonsLayout.addChild(playButton, pauseButton);
    playButton.click(() => {
        sampleVideoExample.play();
    });
    pauseButton.click(() => {
        sampleVideoExample.pause();
    });
    return [sampleVideoExample, buttonsLayout];
}
