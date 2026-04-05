import {
    CircleBlock,
    LayoutBlock,
    RectangleBlock,
    TextBlock,
} from "@2flexible/2flex";

export function CreateEventExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
    });

    rect.click((e) => {
        rect.set({
            backgroundColor: "red",
        });
    });
    return [rect];
}

export function MouseEnterExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
    });

    rect.mouseenter((e) => {
        rect.set({
            backgroundColor: "orange",
        });
    });

    rect.mouseleave((e) => {
        rect.set({
            backgroundColor: "blue",
        });
    });
    return [rect];
}

export function CrossingBlocksExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
    });

    const rect1 = new RectangleBlock({
        width: 170,
        height: 170,
        x: "35%",
        y: "35%",
        backgroundColor: "red",
        draggable: true,
        selectable: true,
    });

    rect.click((e) => {
        rect.set({
            backgroundColor: "red",
        });
    });

    rect1.click((e) => {
        rect1.set({
            backgroundColor: "orange",
        });
    });

    return [rect1, rect];
}

export function ChildBlockExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
    });

    const rect1 = new RectangleBlock({
        width: 80,
        height: 80,
        backgroundColor: "red",
        selectable: true,
    });

    rect.click((e) => {
        rect.set({
            backgroundColor: "red",
        });
    });

    rect1.click((e) => {
        rect1.set({
            backgroundColor: "orange",
        });
    });
    rect.addChild(rect1);
    return [rect];
}

export function CustomEventExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
    });

    const click = (e) => {
        const inBound = rect.checkInBound(e);
        if (inBound)
            rect.set({
                backgroundColor: "red",
            });
        else
            rect.set({
                backgroundColor: "blue",
            });
    };

    rect.eventHandler("click", click);
    return [rect];
}
