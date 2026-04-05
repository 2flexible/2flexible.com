import {
    CircleBlock,
    LayoutBlock,
    RectangleBlock,
    TextBlock,
} from "@2flexible/2flex";

export function RotatingExample() {
    const text = new TextBlock("Dragging...", {
        width: 100,
        height: 20,
        fontSize: "16px",
        color: "white",
        position: "absolute",
        right: 0,
        bottom: 20,
        hidden: true,
    });
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
    });
    let down = false;
    rect.mousemove(() => {
        if (down) {
            text.set({ hidden: false });
        }
    });

    rect.mousedown(() => {
        down = true;
    });

    rect.mouseup(() => {
        down = false;
        text.set({ hidden: true });
    });
    return [text, rect];
}

export function RotatingAxisExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
        dragX: false,
        dragY: true,
    });

    return [rect];
}

export function ResizingExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "orange",
        selectable: true,
        resizable: true,
    });

    return [rect];
}

export function ResizingFlipExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "orange",
        selectable: true,
        resizable: true,
        horizontalFlipResize: true,
        verticalFlipResize: true,
    });

    return [rect];
}

export function ResizingCustomExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "orange",
        selectable: true,
        resizable: true,
        resizeTopLeft: false,
        resizeTop: false,
        resizeTopRight: false,
    });

    return [rect];
}

export function RotationExample() {
    const text = new TextBlock("Rotatable...", {
        width: 100,
        height: 20,
        fontSize: "16px",
        color: "white",
        position: "absolute",
        right: 0,
        bottom: 20,
        hidden: true,
    });
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        rotatable: true,
        selectable: true,
        onRotate: () => {
            text.set({ hidden: false });
        },
    });
    const mouseup = () => {
        text.set({ hidden: true });
    };

    rect.eventHandler("mouseup", mouseup);

    return [text, rect];
}
