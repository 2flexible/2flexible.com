import {
    CircleBlock,
    LayoutBlock,
    RectangleBlock,
    TextBlock,
} from "@2flexible/2flex";

export function SimpleRectangle() {
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

export function SimpleTransformRectangle() {
    const textDrag = new TextBlock("Dragging...", {
        width: 100,
        height: 20,
        fontSize: "16px",
        color: "white",
        important: {
            hidden: true,
        },
    });

    const textResize = new TextBlock("Resizing...", {
        width: 100,
        height: 20,
        fontSize: "16px",
        color: "white",
        important: {
            hidden: true,
        },
    });

    const textRotate = new TextBlock("Rotating...", {
        width: 100,
        height: 20,
        fontSize: "16px",
        color: "white",
        important: {
            hidden: true,
        },
    });
    const textsLayout = new LayoutBlock({
        width: 100,
        height: 60,
        flexDirection: "column",
        position: "absolute",
        bottom: 10,
        right: 10,
    });

    function resizeCallBack() {
        textResize.set({
            important: {
                hidden: false,
            },
        });
    }
    function rotateCallBack() {
        textRotate.set({
            important: {
                hidden: false,
            },
        });
    }

    function dragCallBack() {
        textDrag.set({
            important: {
                hidden: false,
            },
        });
    }

    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
        resizable: true,
        rotatable: true,
        onResize: resizeCallBack,
        onRotate: rotateCallBack,
        onDrag: dragCallBack,
    });

    rect.mouseup(() => {
        textDrag.set({
            important: {
                hidden: true,
            },
        });
        textResize.set({
            important: {
                hidden: true,
            },
        });
        textRotate.set({
            important: {
                hidden: true,
            },
        });
    });

    textsLayout.addChild(textDrag, textResize, textRotate);
    return [textsLayout, rect];
}

export function SimpleResponsibleRectangle() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "10%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
        resizable: true,
        minWidth: 80,
        maxWidth: 170,
    });

    const rectParent = new RectangleBlock({
        width: 130,
        height: 130,
        x: "60%",
        y: "30%",
        backgroundColor: "orange",
        draggable: true,
        selectable: true,
        resizable: true,
    });

    const child = new RectangleBlock({
        width: 60,
        height: 80,
        minWidth: 30,
        maxWidth: 120,
        backgroundColor: "yellow",
    });
    rectParent.addChild(child);

    return [rectParent, rect];
}

export function SimpleCustomizableRectangle() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "10%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
        resizable: true,
        overflow: true,
        position: "absolute",
        top: 0,
        right: 0,
    });

    const child = new RectangleBlock({
        width: 60,
        height: 80,
        backgroundColor: "red",
    });

    const childSecond = new RectangleBlock({
        width: 60,
        height: 80,
        y: 80,
        backgroundColor: "yellow",
    });

    const childThird = new RectangleBlock({
        width: 60,
        height: 80,
        y: 80 * 2,
        backgroundColor: "green",
    });

    rect.addChild(child, childSecond, childThird);
    return [rect];
}

export function AnimatableRectangle() {
    const myRect = new RectangleBlock({
        width: 100,
        height: 100,
        backgroundColor: "aqua",
    });

    myRect.animate({
        backgroundColor: ["aqua", "red"],
        duration: 5000,
        autoStart: true,
        iterations: Infinity,
        easing: "ease-in-out",
    });
    return [myRect];
}

export function CustomizableCircle() {
    const circle = new CircleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "orange",
        draggable: true,
        selectable: true,
        resizable: true,
        resizeTop: false,
        resizeBottom: false,
        hotCornerStrokeColor: "red",
        hotLineStrokeColor: "red",
    });
    return [circle];
}

export function EventCircle() {
    const textOver = new TextBlock("Event: None", {
        width: 100,
        height: 20,
        fontSize: "16px",
        color: "white",
        position: "fixed",
        top: 10,
        left: 10,
    });
    const circle = new CircleBlock({
        width: 130,
        height: 130,
        border: "6px solid white",
        x: "30%",
        y: "30%",
        backgroundColor: "orange",
        draggable: true,
        selectable: true,
    });

    let clicked = false;
    circle.click((e) => {
        clicked = !clicked;
        let color = clicked ? "blue" : "red";
        circle.set({ backgroundColor: color });
        textOver.set({ text: "Event: clicked" });
    });
    circle.mouseover((e) => {
        textOver.set({ text: "Event: mouseover" });
    });
    circle.mouseout((e) => {
        textOver.set({ text: "Event: mouseout" });
    });
    return [circle, textOver];
}
