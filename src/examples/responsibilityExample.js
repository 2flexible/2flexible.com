import {
    CircleBlock,
    LayoutBlock,
    RectangleBlock,
    Block,
    TextBlock,
} from "@2flexible/2flex";

export function SimpleGroupExample() {
    const parentBlock = new RectangleBlock({
        width: 120,
        height: 80,
        backgroundColor: "transparent",
        border: "1px solid white",
        selectable: true,
        draggable: true,
    });
    const childBlock = new RectangleBlock({
        x: 20,
        y: 10,
        width: 70,
        height: 50,
        backgroundColor: "blue",
    });

    parentBlock.addChild(childBlock);
    return [parentBlock];
}

export function BlockGroupExample() {
    const parentBlock = new Block({
        width: 220,
        height: 180,
        selectable: true,
        draggable: true,
    });
    const childBlock = new RectangleBlock({
        x: 2,
        y: 2,
        width: 70,
        height: 50,
        backgroundColor: "blue",
    });

    const childBlock1 = new RectangleBlock({
        width: 70,
        height: 50,
        position: "relative",
        bottom: 0,
        right: 0,
        backgroundColor: "red",
    });

    parentBlock.addChild(childBlock, childBlock1);
    return [parentBlock];
}

export function PaddingExample() {
    const parentBlock = new RectangleBlock({
        width: 220,
        height: 180,
        selectable: true,
        draggable: true,
        backgroundColor: "transparent",
        border: "1px solid white",
        padding: 40,
    });
    const childBlock = new RectangleBlock({
        x: 2,
        y: 2,
        width: 70,
        height: 50,
        backgroundColor: "blue",
    });
    parentBlock.addChild(childBlock);
    return [parentBlock];
}

export function MarginExample() {
    const parentBlock = new RectangleBlock({
        width: 220,
        height: 180,
        selectable: true,
        draggable: true,
        backgroundColor: "transparent",
        border: "1px solid white",
    });
    const childBlock = new RectangleBlock({
        x: 2,
        y: 2,
        width: 70,
        height: 50,
        backgroundColor: "blue",
        margin: 40,
    });
    parentBlock.addChild(childBlock);
    return [parentBlock];
}

export function MinsMaxsExample() {
    const parentBlock = new RectangleBlock({
        width: 220,
        height: 180,
        selectable: true,
        draggable: true,
        backgroundColor: "transparent",
        border: "1px solid white",
        maxWidth: Infinity,
        resizable: true,
    });
    const childBlock = new RectangleBlock({
        width: 70,
        height: 50,
        minWidth: 40,
        maxHeight: 50,
        backgroundColor: "blue",
    });
    parentBlock.addChild(childBlock);

    const parentBlock1 = new RectangleBlock({
        width: 220,
        height: 180,
        selectable: true,
        draggable: true,
        resizable: true,
        maxWidth: Infinity,
        x: "50%",
        backgroundColor: "transparent",
        border: "1px solid white",
    });
    const childBlock1 = new RectangleBlock({
        width: 70,
        maxWidth: 120,
        height: 50,
        minWidth: 40,
        maxHeight: 50,
        backgroundColor: "blue",
    });
    parentBlock.addChild(childBlock);
    parentBlock1.addChild(childBlock1);

    return [parentBlock, parentBlock1];
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

export function SimpleLayoutWrapExample() {
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
        flexWrap: "wrap",
    });
    layout.addChild(rect1, rect2, rect3);
    return [layout];
}

export function SimpleLayoutAlignExample() {
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
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
    });
    layout.addChild(rect1, rect2, rect3);

    const rect11 = new RectangleBlock({
        width: 160,
        height: 90,
        backgroundColor: "blue",
    });

    const rect21 = new RectangleBlock({
        width: 100,
        height: 40,
        backgroundColor: "red",
    });
    const rect31 = new RectangleBlock({
        width: 120,
        height: 50,
        backgroundColor: "orange",
    });
    const layout1 = new LayoutBlock({
        width: 400,
        height: 100,
        selectable: true,
        draggable: true,
        maxWidth: Infinity,
        resizable: true,
        justifyContent: "space-between",
    });
    layout1.addChild(rect11, rect21, rect31);
    return [layout, layout1];
}

export function SimpleLayoutSpaceExample() {
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
        marginLeft: 21,
    });
    const layout = new LayoutBlock({
        width: 300,
        height: 100,
        selectable: true,
        draggable: true,
        maxWidth: Infinity,
        resizable: true,
        padding: 21,
    });
    layout.addChild(rect1, rect2, rect3);
    return [layout];
}

export function GridLayoutSpaceExample() {
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
        marginLeft: 21,
    });
    const layout = new LayoutBlock({
        width: 300,
        height: 100,
        selectable: true,
        draggable: true,
        maxWidth: Infinity,
        resizable: true,
        layout: "grid",
        gridTemplateColumns: [30, 30, 30],
        gridTemplateRow: [50, 30],
    });
    layout.addChild(rect1, rect2, rect3);
    return [layout];
}
