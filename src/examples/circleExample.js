import { CircleBlock } from "@2flexible/2flex";

export function CircleExample() {
    const simpleCircle = new CircleBlock({
        width: 60,
        height: 60,
        backgroundColor: "orange",
        x: "30%",
        y: "30%",
    });
    return [simpleCircle];
}

export function CircleRadiusExample() {
    const simpleCircle = new CircleBlock({
        width: 120,
        height: 60,
        backgroundColor: "orange",
        radiusX: 50,
        radiusY: 120,
        x: "30%",
        y: "30%",
    });
    return [simpleCircle];
}

export function CircleAnglesExample() {
    const simpleCircle = new CircleBlock({
        width: 120,
        height: 120,
        backgroundColor: "orange",
        startAngle: Math.PI / 3,
        endAngle: Math.PI * 2,
        x: "30%",
        y: "30%",
        rotate: -0.5,
    });
    return [simpleCircle];
}

export function CircleInnerAngleExample() {
    const simpleCircle = new CircleBlock({
        width: 120,
        height: 120,
        backgroundColor: "orange",
        startAngle: Math.PI / 3,
        endAngle: Math.PI * 2,
        innerRadius: 15,
        x: "30%",
        y: "30%",
    });
    return [simpleCircle];
}
export function CircleCustomExample() {
    const simpleCircle = new CircleBlock({
        width: 120,
        height: 120,
        backgroundColor: "orange",
        startAngle: Math.PI / 3,
        endAngle: Math.PI * 2,
        innerRadius: 15,
        x: "30%",
        y: "30%",
        lineCap: "butt",
    });
    return [simpleCircle];
}

export function CircleBorderExample() {
    const simpleCircle = new CircleBlock({
        width: 120,
        height: 120,
        backgroundColor: "orange",
        x: "30%",
        y: "30%",
        border: "30px solid black",
    });
    return [simpleCircle];
}
