import {
    LineBlock,
    RectangleBlock,
    LayoutBlock,
    TextBlock,
    bezierEasing,
    cubicBezier,
} from "@2flexible/2flex";

export function HeartAnimationExample() {
    const startX = 70;
    const startY = 40;
    const simpleLine = new LineBlock({
        lineType: "cubicBezier",
        width: 60,
        height: 60,
        startX: startX,
        startY: startY,
        startControlX: 45,
        startControlY: 0,
        endControlX: 0,
        endControlY: 60,
        endX: 70,
        endY: 95,
        // backgroundColor: "red",
        // closeLine: false,
    });

    const simpleLine2 = new LineBlock({
        lineType: "cubicBezier",
        width: 60,
        height: 60,
        startX: 70,
        startY: 95,
        startControlX: 140,
        startControlY: 60,
        endControlX: 95,
        endControlY: 0,
        endX: 70,
        endY: 40,
        lineColor: "red",
        lineWidth: 3,
        backgroundColor: "red",
        // closeLine: false,
    });
    simpleLine2.joinTo(simpleLine);

    simpleLine2.animate({
        opacity: [50, 100],
        blur: [0, 5],
        composite: "add",
        duration: 1000,
        direction: "alternate",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    return [simpleLine, simpleLine2];
}

export function DirectonExample() {
    const normalText = new TextBlock("Direction: Normal", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "22%",
        x: 20,
    });

    const alternateText = new TextBlock("Direction: Alternate", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "42%",
        x: 20,
    });

    const reverseText = new TextBlock("Direction: Reverse", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "62%",
        x: 20,
    });

    const alternateReverseText = new TextBlock("Direction: Alternate Reverse", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "82%",
        x: 20,
    });

    const rect = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 12,
        y: "20%",
    });

    rect.animate({
        x: [400, 500],
        composite: "add",
        duration: 3000,
        direction: "normal",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    const rect1 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderRadius: 12,
        y: "40%",
    });

    rect1.animate({
        x: [400, 500],
        composite: "add",
        duration: 3000,
        direction: "alternate",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    const rect2 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "orange",
        borderRadius: 12,
        y: "60%",
    });

    rect2.animate({
        x: [400, 500],
        composite: "add",
        duration: 3000,
        direction: "reverse",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    const rect3 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "aqua",
        borderRadius: 12,
        y: "80%",
    });

    rect3.animate({
        x: [400, 500],
        composite: "add",
        duration: 3000,
        direction: "alternate-reverse",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });
    return [
        rect,
        rect1,
        rect2,
        rect3,
        normalText,
        alternateText,
        reverseText,
        alternateReverseText,
    ];
}

export function IternationExample() {
    const limitedIterText = new TextBlock("Iterations: 3", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "12%",
        x: 20,
    });

    const infinteIterText = new TextBlock("Iterations: Infinite", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "52%",
        x: 20,
    });

    const rect = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderRadius: 12,
        y: "22%",
    });

    rect.animate({
        x: [20, 120],
        duration: 3000,
        direction: "normal",
        autoStart: true,
        iterations: 3,
        easing: "ease",
    });

    const rect1 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 12,
        y: "62%",
    });

    rect1.animate({
        x: [20, 120],
        duration: 3000,
        direction: "normal",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });
    return [rect, rect1, limitedIterText, infinteIterText];
}

export function CompositeExample() {
    const replaceText = new TextBlock("Composite: Replace", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "2%",
        x: 20,
    });

    const accumulateIterText = new TextBlock("Composite: Accumulate", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "2%",
        x: 620,
    });

    const addIterText = new TextBlock("Composite: Add", {
        width: 100,
        height: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        y: "2%",
        x: 320,
    });

    const rect = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderRadius: 12,
        y: "22%",
    });

    rect.animate({
        x: [20, 120],
        y: [70, 180],
        duration: 3000,
        composite: "replace",
        direction: "normal",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    const rect1 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 12,
        y: "62%",
    });

    rect1.animate({
        x: [320, 420],
        duration: 3000,
        y: [70, 180],
        direction: "normal",
        composite: "add",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    const rect2 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "orange",
        borderRadius: 12,
        y: "62%",
        x: 660,
    });

    rect2.animate({
        y: [70, 170],
        duration: 3000,
        direction: "normal",
        composite: "accumulate",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });
    return [rect, replaceText, rect1, addIterText, rect2, accumulateIterText];
}
export function EasingExample() {
    const rect = new RectangleBlock({
        x: 20,
        y: 120,
        width: 100,
        height: 100,
        backgroundColor: "blue",
    });
    const startX = 100;
    const startY = 100;

    const endX = 330;
    const endY = 320;
    const line2 = new LineBlock({
        x: 200,
        y: 110,
        lineType: "cubicBezier",
        width: 100,
        height: 100,
        startX: 100,
        startY: 100,
        startControlX: 120,
        startControlY: 220,
        endControlX: 320,
        endControlY: 220,
        endX: 330,
        endY: 320,
        lineColor: "white",
        lineWidth: 20,
    });
    let reverse = false;
    rect.animate(
        {
            autoStart: true,
            composite: "add",
            duration: 3000,
            direction: "alternate",
            easing: bezierEasing(0.1, 0.9, 0.9, 0.1),
            iterations: Infinity,
        },
        (t, ease) => {
            const x = rect.x();
            const y = rect.y();
            if (x >= endX && y >= endY) reverse = true;
            if (x <= startX && y <= startY) reverse = false;
            if (reverse) {
                const xPoint = cubicBezier(
                    line2.endX(),
                    line2.endControlX(),
                    line2.startControlX(),
                    line2.startX(),
                    ease
                );
                const yPoint = cubicBezier(
                    line2.endY(),
                    line2.endControlY(),
                    line2.startControlY(),
                    line2.startY(),
                    ease
                );
                rect.x(xPoint);
                rect.y(yPoint);
            } else {
                const xPoint = cubicBezier(
                    line2.startX(),
                    line2.startControlX(),
                    line2.endControlX(),
                    line2.endX(),
                    ease
                );
                const yPoint = cubicBezier(
                    line2.startY(),
                    line2.startControlY(),
                    line2.endControlY(),
                    line2.endY(),
                    ease
                );
                rect.x(xPoint);
                rect.y(yPoint);
            }
        }
    );
    return [line2, rect];
}

export function ControlsAnimation() {
    const rect1 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 12,
        y: "62%",
    });

    const animId = rect1.animate({
        x: [100, 200],
        duration: 3000,
        direction: "alternate",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    const playButton = new RectangleBlock({
        width: 70,
        height: 30,
        padding: [8, 20],
        borderRadius: 12,
        backgroundColor: "#696969",
        border: "4px solid #a3a3a3",
        selectable: true,
        hotLines: false,
    });

    const playText = new TextBlock("Play", {
        width: "100%",
        height: "100%",
        fontSize: "14px",
        color: "white",
        fontWeight: 500,
    });
    playButton.addChild(playText);

    const pauseButton = new RectangleBlock({
        width: 70,
        height: 30,
        padding: [8, 15],
        borderRadius: 12,
        backgroundColor: "#696969",
        border: "4px solid #a3a3a3",
        selectable: true,
        hotLines: false,
    });

    const pauseText = new TextBlock("Pause", {
        width: "100%",
        height: "100%",
        fontSize: "14px",
        color: "white",
        fontWeight: 500,
    });
    playButton.addChild(playText);
    pauseButton.addChild(pauseText);

    const buttonsLayout = new LayoutBlock({
        width: 140,
        height: 30,
        gap: 10,
        position: "absolute",
        top: 12,
        right: 20,
    });
    buttonsLayout.addChild(playButton, pauseButton);
    playButton.click(() => {
        rect1.animationStart(animId);
    });
    pauseButton.click(() => {
        rect1.animationStop(animId);
    });
    return [rect1, buttonsLayout];
}

export function DelayExample() {
    const rect1 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 12,
        y: "32%",
    });
    const animId = rect1.animate({
        x: [100, 200],
        delay: 1000,
        duration: 3000,
        direction: "alternate",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    return [rect1];
}

export function IterStartExample() {
    const rect1 = new RectangleBlock({
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: 12,
        y: "32%",
    });

    
    const animId = rect1.animate({
        x: [100, 200],
        iterationStart: 0.5,
        duration: 3000,
        direction: "alternate",
        autoStart: true,
        iterations: Infinity,
        easing: "ease",
    });

    return [rect1];
}
