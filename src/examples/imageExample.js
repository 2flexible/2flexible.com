import { ImageBlock } from "@2flexible/2flex";

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

export function ImageCuttingExample() {
    const image = new ImageBlock(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDQU7kqSBdt3uSRwJhB7wKs8nOC2VvEnuuQ&s",
        {
            width: 300,
            height: 300,
            x: "53%",
            y: "13%",
            selectable: true,
            draggable: true,
            clipX: 70,
            clipWidth: 270,
            clipY: 20,
            clipHeight: 140,
        }
    );
    const imageOrg = new ImageBlock(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDQU7kqSBdt3uSRwJhB7wKs8nOC2VvEnuuQ&s",
        {
            width: 300,
            height: 300,
            x: "2%",
            y: "13%",
            selectable: true,
            draggable: true,
        }
    );

    return [imageOrg, image];
}

export function ImageFitExample() {
    const url =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssdL0Yty9vYW-vjEzZqg2QbVSKFVrq3wLGA&s";
    const image = new ImageBlock(url, {
        width: 120,
        height: 120,
        x: "3%",
        y: "13%",
        selectable: true,
        draggable: true,
        objectFit: "contain",
    });

    const imageCover = new ImageBlock(url, {
        width: 120,
        height: 120,
        x: "20%",
        y: "13%",
        selectable: true,
        draggable: true,
        objectFit: "cover",
    });

    const imageFill = new ImageBlock(url, {
        width: 120,
        height: 120,
        x: "63%",
        y: "13%",
        selectable: true,
        draggable: true,
        objectFit: "fill",
    });
    return [image, imageCover, imageFill];
}

export function ImageRepateExample() {
    const url =
        "https://i.pinimg.com/474x/07/87/96/078796c30038444c72f7a67178bba6f1.jpg";
    const image = new ImageBlock(url, {
        width: 320,
        height: 320,
        x: "3%",
        y: "13%",
        selectable: true,
        draggable: true,
        repeatX: "fill",
        repeatY: 2,
        selectable: true,
        draggable: true,
        resizable: true,
    });
    return [image];
}