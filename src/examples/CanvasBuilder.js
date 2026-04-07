import { useEffect, useRef, Children } from "react";
import { RectangleBlock, Canvas, ImageBlock } from "@2flexible/2flex";
export default function CanvasBuilder({
    id = "canvas",
    width = 200,
    height = 200,
    children,
}) {
    const ref = useRef(null);
    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        console.log(canvas)
        const initCanvas = new Canvas(id, width, height);
        const blocks = [];
        Children.map(children, (c) => {
            const block = children.type(children.props);
            block.forEach((element) => {
                blocks.push(element);
            });
        });
        // const bg = new ImageBlock(BgNew, {
        //     width: "100%",
        //     height: "100%",
        //     opacity: "1",
        //     objectFit: "fill",
        // });
        initCanvas.add(...blocks);
    }, [ref]);

    return (
        <canvas
            ref={ref}
            id={id}
            width={width}
            height={height}
            style={{
                backgroundColor: "rgba(78, 78, 78, 0.2)",
                border: "1px solid white",
            }}
        ></canvas>
    );
}
