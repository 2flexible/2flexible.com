import {
    CircleBlock,
    LayoutBlock,
    RectangleBlock,
    TextBlock,
} from "@2flexible/2flex";

export function FixedExample() {
    const text = new TextBlock(
        "Try to move canvas with `space + drag` or `mouse wheel`",
        {
            width: 200,
            height: 20,
            fontSize: "18px",
            color: "white",
            position: "fixed",
            bottom: "20%",
            left: "15%",
        }
    );

    const currentPos = new TextBlock("x:0 y:0 z:1", {
        width: 200,
        height: 20,
        fontSize: "16px",
        color: "white",
        position: "fixed",
        left: 10,
        top: 10,
    });
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        position: "fixed",
        top: 20,
        left: "40%",
        draggable: true,
        selectable: true,
    });
    let down = false;
    rect.mousemove(() => {
        if (down) {
            const canvasPos = currentPos.canvas?.currentPosition;
            currentPos.set({
                hidden: false,
                text: `x:${canvasPos.x}\ny:${canvasPos.y}\nz:${canvasPos.z}`,
            });
        }
    });

    rect.mousedown(() => {
        down = true;
    });

    rect.mouseup(() => {
        down = false;
        currentPos.set({ hidden: true });
    });
    return [currentPos, text, rect];
}

export function StickyExample() {
    const text = new TextBlock(
        "Try to move canvas with `space + drag` or `mouse wheel`",
        {
            width: 200,
            height: 20,
            fontSize: "18px",
            color: "white",
            position: "fixed",
            bottom: "20%",
            left: "15%",
        }
    );

    const currentPos = new TextBlock("x:0 y:0 z:1", {
        width: 200,
        height: 20,
        fontSize: "16px",
        color: "white",
        position: "fixed",
        left: 10,
        top: 10,
    });
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        x: "30%",
        y: "30%",
        backgroundColor: "blue",
        position: "sticky",
        top: "50%",
        left: "40%",
        draggable: true,
        selectable: true,
    });
    let down = false;
    rect.mousemove(() => {
        if (down) {
            const canvasPos = currentPos.canvas?.currentPosition;
            currentPos.set({
                hidden: false,
                text: `x:${canvasPos.x}\ny:${canvasPos.y}\nz:${canvasPos.z}`,
            });
        }
    });

    rect.mousedown(() => {
        down = true;
    });

    rect.mouseup(() => {
        down = false;
        currentPos.set({ hidden: true });
    });
    return [currentPos, text, rect];
}

export function RelativeExample() {
    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        backgroundColor: "blue",
        position: "relative",
        bottom: "20px",
        left: "20px",
        draggable: true,
        selectable: true,
    });

    const parent = new RectangleBlock({
        width: 180,
        height: 170,
        x: "60%",
        y: "20%",
        backgroundColor: "orange",
        draggable: true,
        selectable: true,
    });

    const child = new RectangleBlock({
        width: "50%",
        height: "50%",
        backgroundColor: "aqua",
        position: "relative",
        top: "20px",
    });
    parent.addChild(child);
    return [parent, rect];
}

export function AbsoluteExample() {
    const parentText = new TextBlock("Parent Block", {
        width: 200,
        height: 20,
        fontSize: "18px",
        fontWeight: "bolder",
        color: "white",
        position: "relative",
        top: 10,
        left: 10,
    });

    const childText = new TextBlock("Child Block", {
        width: 200,
        height: 20,
        fontSize: "16px",
        fontWeight: "bolder",
        color: "white",
        position: "relative",
        top: 5,
        left: 5,
    });

    const rect = new RectangleBlock({
        width: 130,
        height: 130,
        backgroundColor: "blue",
        position: "absolute",
        bottom: 20,
        left: 20,
        draggable: true,
        selectable: true,
    });

    const parent = new RectangleBlock({
        width: 180,
        height: 170,
        x: "60%",
        y: "20%",
        backgroundColor: "navy",
        draggable: true,
        selectable: true,
    });

    const child = new RectangleBlock({
        width: "50%",
        height: "50%",
        backgroundColor: "red",
        position: "absolute",
        top: "20",
    });
    parent.addChild(parentText);
    child.addChild(childText);
    parent.addChild(child);
    return [parent, rect];
}
