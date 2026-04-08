import {
    LayoutBlock,
    ShapeBlock,
    RectangleBlock,
    CircleBlock,
    LineBlock,
    TextBlock,
    ImageBlock,
    VideoBlock,
    Block,
} from "@2flexible/2flex";

import { CheckboxBlock } from "@site/src/blocks/checboxBlock";
import { InputBlock } from "@site/src/blocks/inputBlock";
import { SelectBlock } from "@site/src/blocks/selectBlock";

const changedOptions = {};

function updateOptionsOnChange(block) {
    for (const [key, opt] of Object.entries(block.ownOptions)) {
        const chagneObj = changedOptions[key];
        if (chagneObj && chagneObj.value !== String(opt)) {
            if (chagneObj.type === "text") {
                // chagneObj.block.set({ text: String(opt) });
            }
        }
    }
}

export function BlockOptions() {
    const block = new Block({});

    const background = new RectangleBlock({
        name: "propertiesBackground",
        width: 300,
        height: 700,
        backgroundColor: "rgba(65, 65, 65, 1)",
        borderRadius: 10,
        padding: 20,
        overflowY: "scroll",
        position: "fixed",
        top: 80,
        right: 40,
        zIndex: 999,
        // hidden: true,
    });

    const contextLayout = new LayoutBlock({
        flexDirection: "column",
        // justifyContent: "space-between",
        gap: 20,
        width: "100%",
        height: "100%",
    });

    const opts = loadOptions(block);

    for (const [index, opt] of Object.entries(opts)) {
        const innerLayout = new LayoutBlock({
            width: "100%",
            height: 20,
            alignItems: "center",
        });
        const blockName = new TextBlock(opt.option, {
            width: "50%",
            height: 10,
            fontSize: 14,
            color: "white",
        });
        if (opt.category === "text") {
            const editableT = new InputBlock(String(opt.value), {
                inputType: "number",
            });
            innerLayout.addChild(blockName, editableT);

            changedOptions[opt.option] = {
                type: "text",
                value: String(opt.value),
                block: editableT,
            };
        } else if (opt.category === "checkbox") {
            const checkB = new CheckboxBlock();
            innerLayout.addChild(checkB, blockName);
        } else if (opt.category === "select") {
            const innerOptions = [];
            for (const option of opt.selectOptions) {
                innerOptions.push(() => {
                    return new TextBlock(option, {
                        width: "100%",
                        height: 10,
                        fontSize: 14,
                        color: "white",
                    });
                });
            }
            const checkB = new SelectBlock({
                selectOptions: innerOptions,
            });
            // innerLayout.addChild(blockName, checkB);
        } else if (opt.category === "custom") {
            let text = "";
            if (opt.option === "onDrag") {
                text = "dragging...";
            } else if (opt.option === "onResize") {
                text = "resizing...";
            } else if (opt.option === "onRotate") {
                text = "rotating...";
            }
            const textT = new TextBlock(text, {
                width: "100%",
                height: 10,
                fontSize: 14,
                color: "white",
            });
            innerLayout.addChild(blockName, textT);
        }
        contextLayout.addChild(innerLayout);
    }
    background.addChild(contextLayout);
    return [background];
}

function loadOptions(block) {
    return [
        { option: "x", value: block.x(), category: "text" },
        { option: "y", value: block.y(), category: "text" },
        { option: "width", value: block.width(), category: "text" },
        { option: "height", value: block.height(), category: "text" },
        { option: "minWidth", value: block.minWidth(), category: "text" },
        { option: "minHeight", value: block.minHeight(), category: "text" },
        { option: "maxWidth", value: block.maxWidth(), category: "text" },
        { option: "maxHeight", value: block.maxHeight(), category: "text" },
        {
            option: "position",
            value: block.position(),
            category: "select",
            selectOptions: [
                "static",
                "relative",
                "absolute",
                "fixed",
                "sticky",
            ],
        },

        { option: "top", value: block.top() || 0, category: "text" },
        { option: "bottom", value: block.bottom() || 0, category: "text" },
        { option: "left", value: block.left() || 0, category: "text" },
        { option: "right", value: block.right() || 0, category: "text" },

        {
            option: "selectable",
            value: block.selectable(),
            category: "checkbox",
        },

        { option: "padding", value: block.padding(), category: "text" },
        { option: "paddingTop", value: block.paddingTop(), category: "text" },
        {
            option: "paddingRight",
            value: block.paddingRight(),
            category: "text",
        },
        {
            option: "paddingBottom",
            value: block.paddingBottom(),
            category: "text",
        },
        { option: "paddingLeft", value: block.paddingLeft(), category: "text" },

        { option: "margin", value: block.margin(), category: "text" },
        { option: "marginTop", value: block.marginTop(), category: "text" },
        { option: "marginRight", value: block.marginRight(), category: "text" },
        {
            option: "marginBottom",
            value: block.marginBottom(),
            category: "text",
        },
        { option: "marginLeft", value: block.marginLeft(), category: "text" },

        // { option: "zIndex", value: block.zIndex(), category: "text" },

        // { option: "draggable", value: block.draggable(), category: "checkbox" },
        // { option: "onDrag", value: block.onDrag(), category: "custom" },
        // { option: "dragX", value: block.dragX(), category: "text" },
        // { option: "dragY", value: block.dragY(), category: "text" },

        // { option: "rotate", value: block.rotate(), category: "text" },
        // { option: "onRotate", value: block.onRotate(), category: "custom" },

        // { option: "order", value: block.order(), category: "text" },

        // { option: "hotAreaGap", value: block.hotAreaGap(), category: "text" },
        // {
        //     option: "hotCornerSize",
        //     value: block.hotCornerSize(),
        //     category: "text",
        // },
        // {
        //     option: "hotCornerRadius",
        //     value: block.hotCornerRadius(),
        //     category: "text",
        // },
        // {
        //     option: "hotCornerStrokeWidth",
        //     value: block.hotCornerStrokeWidth(),
        //     category: "text",
        // },
        // {
        //     option: "hotCornerStrokeColor",
        //     value: block.hotCornerStrokeColor(),
        //     category: "text",
        // },
        // {
        //     option: "hotCornerBackgroundColor",
        //     value: block.hotCornerBackgroundColor(),
        //     category: "text",
        // },

        // {
        //     option: "hotLineStrokeWidth",
        //     value: block.hotLineStrokeWidth(),
        //     category: "text",
        // },
        // {
        //     option: "hotLineStrokeColor",
        //     value: block.hotLineStrokeColor(),
        //     category: "text",
        // },

        // {
        //     option: "rotationTopLeft",
        //     value: block.rotationTopLeft(),
        //     category: "text",
        // },
        // {
        //     option: "rotationTopRight",
        //     value: block.rotationTopRight(),
        //     category: "text",
        // },
        // {
        //     option: "rotationBottomLeft",
        //     value: block.rotationBottomLeft(),
        //     category: "text",
        // },
        // {
        //     option: "rotationBottomRight",
        //     value: block.rotationBottomRight(),
        //     category: "text",
        // },

        // {
        //     option: "resizeTopLeft",
        //     value: block.resizeTopLeft(),
        //     category: "text",
        // },
        // {
        //     option: "resizeTopRight",
        //     value: block.resizeTopRight(),
        //     category: "text",
        // },
        // {
        //     option: "resizeBottomLeft",
        //     value: block.resizeBottomLeft(),
        //     category: "text",
        // },
        // {
        //     option: "resizeBottomRight",
        //     value: block.resizeBottomRight(),
        //     category: "text",
        // },

        // { option: "resizeTop", value: block.resizeTop(), category: "text" },
        // { option: "resizeLeft", value: block.resizeLeft(), category: "text" },
        // { option: "resizeRight", value: block.resizeRight(), category: "text" },
        // {
        //     option: "resizeBottom",
        //     value: block.resizeBottom(),
        //     category: "text",
        // },

        // {
        //     option: "horizontalFlipResize",
        //     value: block.horizontalFlipResize(),
        //     category: "checkbox",
        // },
        // {
        //     option: "verticalFlipResize",
        //     value: block.verticalFlipResize(),
        //     category: "checkbox",
        // },

        // { option: "resizable", value: block.resizable(), category: "checkbox" },
        // { option: "onResize", value: block.onResize(), category: "custom" },

        // { option: "hidden", value: block.hidden(), category: "checkbox" },

        // {
        //     option: "rotationCenterX",
        //     value: block.rotationCenterX(),
        //     category: "text",
        // },
        // {
        //     option: "rotationCenterY",
        //     value: block.rotationCenterY(),
        //     category: "text",
        // },
    ];
}
