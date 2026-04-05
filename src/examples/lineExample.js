import { CircleBlock, LineBlock, RectangleBlock } from "@2flexible/2flex";

export function LineExample() {
    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 120,
        endX: 240,
        endY: 240,
        lineColor: "white",
        lineWidth: 30,
        draggable: true,
        selectable: true,
    });
    return [line];
}

export function BezierCurveExample() {
    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 120,
        endX: 340,
        endY: 240,
        lineType: "cubicBezier",
        startControlX: 180,
        startControlY: 220,
        endControlX: 300,
        endControlY: 120,
        lineColor: "white",
        lineWidth: 30,
        draggable: true,
        selectable: true,
        startDraggable: true,
        startControllable: true,
        endControllable: true,
        endDraggable: true,
        editable: true,
    });
    return [line];
}

export function ControllableExample() {
    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 120,
        endX: 340,
        endY: 240,
        lineType: "cubicBezier",
        startControlX: 180,
        startControlY: 220,
        endControlX: 300,
        endControlY: 120,
        lineColor: "white",
        startControllable: true,
        endControllable: false,
        lineWidth: 30,
        draggable: true,
        selectable: true,
        editable: true,
    });
    return [line];
}

export function DraggableExample() {
    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 120,
        endX: 340,
        endY: 240,
        lineType: "cubicBezier",
        startControlX: 180,
        startControlY: 220,
        endControlX: 300,
        endControlY: 120,
        lineColor: "white",
        lineWidth: 30,
        draggable: true,
        selectable: true,
        startDraggable: true,
        endDraggable: false,
        editable: true,
    });
    return [line];
}

export function StickyExample() {
    const rect = new RectangleBlock({
        x: "12%",
        y: "12%",
        width: 130,
        height: 130,
        backgroundColor: "blue",
        draggable: true,
        selectable: true,
    });

    const circle = new CircleBlock({
        x: "42%",
        y: "42%",
        width: 130,
        height: 130,
        backgroundColor: "red",
        draggable: true,
        selectable: true,
    });


    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 120,
        endX: 340,
        endY: 240,
        lineType: "cubicBezier",
        startControlX: 180,
        startControlY: 220,
        endControlX: 300,
        endControlY: 120,
        lineColor: "white",
        lineWidth: 30,
        draggable: true,
        selectable: true,
        startDraggable: true,
        endDraggable: false,
        editable: true,
    });
    line.stickStart({block: rect, x: rect.width(), y: rect.height()})
    line.stickEnd({block: circle, x: 40, y: 40})

    return [line, rect, circle];
}


export function JoinExample() {
    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 120,
        endX: 280,
        endY: 230,
        lineType: "cubicBezier",
        startControlX: 180,
        startControlY: 220,
        endControlX: 300,
        endControlY: 120,
        lineColor: "red",
        lineWidth: 30,
        draggable: true,
        selectable: true,
        startDraggable: true,
        endDraggable: true,
        editable: true,
    });


    const line2 = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX:30,
        startY: 10,
        endX: 400,
        endY: 300,
        lineType: "cubicBezier",
        startControlX: 30,
        startControlY: 30,
        endControlX: 300,
        endControlY: 300,
        lineColor: "orange",
        lineWidth: 30,
        draggable: true,
        selectable: true,
        startDraggable: true,
        endDraggable: true,
        editable: true,
    });
    line2.joinTo(line)
    return [line, line2];
}

export function CustomExample() {
    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 120,
        endX: 340,
        endY: 240,
        lineType: "cubicBezier",
        startControlX: 180,
        startControlY: 220,
        endControlX: 300,
        endControlY: 120,
        lineColor: "red",
        lineWidth: 10,
        draggable: true,
        selectable: true,
        startDraggable: true,
        endDraggable: false,
        editable: true,
    });
    return [line];
}

export function ClosedExample() {
    const line = new LineBlock({
        width: 120,
        height: 120,
        lineType: "line",
        startX: 120,
        startY: 220,
        endX: 340,
        endY: 240,
        lineType: "cubicBezier",
        startControlX: 180,
        startControlY: 220,
        endControlX: 300,
        endControlY: 120,
        lineColor: "red",
        lineWidth: 10,
        draggable: true,
        selectable: true,
        startDraggable: true,
        endDraggable: false,
        editable: true,
        closeLine: true,
        backgroundColor: "white"
    });
    return [line];
}