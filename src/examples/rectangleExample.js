import {
    CircleBlock,
    LayoutBlock,
    RectangleBlock,
    TextBlock,
} from "@2flexible/2flex";

export function SimpleRectangleExample() {
    const rect = new RectangleBlock({
        x: "33%",
        y: "33%",
        width: 130,
        height: 130,
        backgroundColor: "aqua",
        draggable: true,
        selectable: true,
    });
    return [rect];
}

export function BorderExample() {
    const rect = new RectangleBlock({
        x: "33%",
        y: "33%",
        width: 130,
        height: 130,
        borderRadius: [40, 50, 0, 0],
        backgroundColor: "solid",
        draggable: true,
        selectable: true,
    });
    return [rect];
}

export function CustomBorderExample() {
    const rect = new RectangleBlock({
        x: "33%",
        y: "33%",
        width: 130,
        height: 130,
        borderRadius: 10,
        border: "30px solid purple",
        backgroundColor: "green",
        draggable: true,
        selectable: true,
    });
    return [rect];
}


export function CustomSingleBorderExample() {
    const rect = new RectangleBlock({
        x: "33%",
        y: "33%",
        width: 130,
        height: 130,
        // borderRadius: 4,
        borderTop: "30px solid purple",
        backgroundColor: "green",
        draggable: true,
        selectable: true,
    });
    return [rect];
}
