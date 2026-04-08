import { useEffect, useRef, Children } from "react";
import { Canvas, ImageBlock } from "@2flexible/2flex";
import { CheckboxBlock } from "@site/src/blocks/checboxBlock";
import { InputBlock } from "@site/src/blocks/inputBlock";
import { SelectBlock } from "@site/src/blocks/selectBlock";

import BgNew from "@site/static/img/bgnew.png";

export default function CanvasInit({
    id = "canvas",
    width = 200,
    height = 200,
    children,
}) {
    const ref = useRef(null);
    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const initCanvas = new Canvas(
            id,
            window.outerWidth * 0.95,
            window.outerHeight * 0.9,
            {
                "background-color": "#1e1e1e",
                "border-radius": "22px",
                move: "keboard",
                history: true,
                historySize: 4,
                zoom: "point",
            }
        );
        const blocks = [];
        Children.map(children, (c) => {
            const block = c.type(children.props);
            block.forEach((element) => {
                blocks.push(element);
            });
        });

        let hidden = false;
        const payload = localStorage.getItem("payload");
        if (payload) initCanvas.load(payload);
        // show context menu for adding blocks
        initCanvas.registerEvent("contextmenu", (e) => {
            e.preventDefault();

            const context = initCanvas.find({ name: "contextBackground" })?.[0];
            context.set({ hidden: hidden, x: e.clientX, y: e.clientY });

            hidden = !hidden;

            // reset background highligthing which is accidentally added
            const childs = context.findChilds({
                backgroundColor: "rgba(100, 100, 100, 0.2)",
            });
            childs.forEach((block) =>
                block.set({ backgroundColor: "rgba(100, 100, 100, 0)" })
            );
        });
        // hide blocks
        initCanvas.registerEvent("click", (e) => {
            e.preventDefault();

            const context = initCanvas.find({ name: "contextBackground" })?.[0];
            context?.set({ hidden: true });

            const propertiesBar = initCanvas.find({
                name: "propertiesBackground",
            })?.[0];
            // if (!propertiesBar.checkInBound(e))
            //     propertiesBar?.set({ hidden: true });
            hidden = false;
        });
        const i = new Image();
        i.src = BgNew;

        i.onload = () => {
            const bg = new ImageBlock(BgNew, {
                width: "100%",
                height: "100%",
                opacity: 2,
                objectFit: "fill",
            });
            // initCanvas.add(bg);
        };
        initCanvas.registerBlocks(InputBlock, CheckboxBlock, SelectBlock);
        initCanvas.add(...blocks);
    }, [ref]);

    return (
        <canvas
            ref={ref}
            id={id}
            width={window.outerWidth}
            height={window.outerHeight * 0.6}
            style={{
                backgroundColor: "#1e1e1e",
                margin: "40px 60px",
            }}
        ></canvas>
    );
}
