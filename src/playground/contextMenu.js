import {
    LayoutBlock,
    RectangleBlock,
    CircleBlock,
    LineBlock,
    TextBlock,
    ImageBlock,
    VideoBlock,
} from "@2flexible/2flex";

import Cat from "@site/static/img/cat.jpg";
import Image from "@site/static/img/image.svg";
import Video from "@site/static/img/video.svg";

export function ContextMenu() {
    const background = new RectangleBlock({
        name: "contextBackground",
        width: 200,
        height: 300,
        x: 200,
        y: 150,
        backgroundColor: "rgba(60, 60, 60, 1)",
        borderRadius: 10,
        padding: 15,
        hidden: true,
        zIndex: 99,
        dropShadow: ["12px", "12px", "12px", "rgba(0, 0, 0, 0.2)"],
    });

    const contextLayout = new LayoutBlock({
        name: "contextLayout",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
    });
    const blocks = contextElements(background.canvas);

    const addText = title("Add Blocks");
    contextLayout.addChild(addText);

    for (const [index, block] of Object.entries(blocks)) {
        const innerLayout = new LayoutBlock({
            width: "100%",
            height: "100%",
            alignItems: "center",
            selectable: true,
            padding: [0, 10],
            gap: 20,
        });
        const bgHover = new RectangleBlock({
            width: "100%",
            height: "100%",
            borderRadius: 5,
        });
        const blockName = new TextBlock(block.name, {
            width: "50%",
            height: 10,
            fontSize: 14,
            color: "white",
        });

        innerLayout.addChild(block.icon, blockName);
        bgHover.addChild(innerLayout);
        contextLayout.addChild(bgHover);

        if (index < blocks.length - 1) {
            const breakLine = new LineBlock({
                width: "100%",
                startX: 0,
                startY: 0,
                endX: 160,
                endY: 0,
                height: 2,
                lineColor: "rgba(100, 100, 100, 1)",
                lineWidth: 2,
            });
            // contextLayout.addChild(breakLine);
        }

        innerLayout.click((e) => {
            // if (background.hidden()) return;

            let addBlock = block.block(background.x(), background.y());
            let hasBeenClicked = false;

            addBlock.mousemove((e) => {
                // console.log("move");
                // updateOptionsOnChange(addBlock);
            });
            // addBlock.click((e) => {
            //     if (hasBeenClicked) return;
            //     const propBackground = innerLayout.canvas.find({
            //         name: "propertiesBackground",
            //     })?.[0];
            //     propBackground.set({ hidden: false });
            //     hasBeenClicked = true;
            // });

            innerLayout.canvas.add(addBlock);
            background.set({ hidden: true });

            // const propertiesBar = innerLayout.canvas.find({
            //     name: "propertiesBackground",
            // })?.[0];
            // propertiesBar.set({ hidden: false });
        });

        innerLayout.mouseenter((e) => {
            bgHover.set({ backgroundColor: "rgba(100, 100, 100, 0.2)" });
        });
        innerLayout.mouseleave((e) => {
            bgHover.set({ backgroundColor: "rgba(100, 100, 100, 0)" });
        });
    }

    background.addChild(contextLayout);
    return [background];
}

function title(title) {
    return new TextBlock(title, {
        width: "100%",
        height: "100%",
        fontSize: 16,
        color: "white",
        // margin: [0, 10],
        marginLeft: 10,
        marginBottom: 15,
    });
}

function contextElements() {
    const commonConfigs = {
        width: 200,
        height: 200,
        selectable: true,
        draggable: true,
        resizable: true,
        rotatable: true,
    };

    function generateRandomBg() {
        const getRandom = (min, max) => {
            return Math.max(min, Math.floor(Math.random() * max));
        };
        return `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
            0,
            255
        )}, ${getRandom(50, 100)})`;
    }
    return [
        {
            name: "Rectangle",
            block: (x, y) => {
                return new RectangleBlock({
                    ...commonConfigs,
                    x: x,
                    y: y,
                    backgroundColor: generateRandomBg(),
                });
            },
            icon: new RectangleBlock({
                width: 12,
                height: 12,
                border: "2px solid white",
            }),
        },
        {
            name: "Circle",
            block: (x, y) => {
                return new CircleBlock({
                    ...commonConfigs,
                    x: x,
                    y: y,
                    radius: 50,
                    backgroundColor: generateRandomBg(),
                });
            },
            icon: new CircleBlock({
                width: 12,
                height: 12,
                radiusX: 15,
                radiusY: 15,
                border: "2px solid white",
                backgroundColor: "transparent",
            }),
        },
        {
            name: "Line",
            block: (x, y) => {
                return new LineBlock({
                    ...commonConfigs,
                    x: x,
                    y: y,
                    endX: x + 100,
                    endY: y + 100,
                    lineColor: generateRandomBg(),
                    lineWidth: 10,
                });
            },
            icon: new LineBlock({
                width: 10,
                height: 10,
                startX: 0,
                startY: 0,
                endX: 10,
                endY: 10,
                lineColor: "white",
                lineWidth: 2,
            }),
        },
        {
            name: "Text",
            block: (x, y) => {
                return new TextBlock("Text", {
                    x: x,
                    y: y,
                    ...commonConfigs,
                    fontSize: 68,
                    width: 200,
                    strokeColor: "white",
                    color: generateRandomBg(),
                    storkeWidth: 4,
                });
            },
            icon: new TextBlock("T", {
                width: 10,
                height: 10,
                fontSize: 22,
                strokeColor: "white",
                color: "transparent",
                storkeWidth: 4,
            }),
        },
        {
            name: "Image",
            block: (x, y) => {
                return new ImageBlock(Cat, {
                    x: x,
                    y: y,
                    ...commonConfigs,
                    objectFit: "fill",
                });
            },
            icon: new ImageBlock(Image.deafult, {
                ...commonConfigs,
                width: 15,
                height: 15,
                objectFit: "fill",
            }),
        },
        {
            name: "Video",
            block: (x, y) => {
                return new VideoBlock(videoExample, {
                    x: x,
                    y: y,
                    ...commonConfigs,
                    play: true,
                });
            },
            icon: new ImageBlock(Video.default, {
                ...commonConfigs,
                width: 15,
                height: 15,
                objectFit: "fill",
            }),
        },
    ];
}
