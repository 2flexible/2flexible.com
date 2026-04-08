import {
    LayoutBlock,
    RectangleBlock,
    TextBlock,
    ImageBlock,
    Block,
} from "@2flexible/2flex";

import ArrowDown from "@site/static/img/arrowdown.svg"

export class InputBlock extends RectangleBlock {
    #controlSide;
    #inputSide;

    #currentVal;

    constructor(text, options) {
        super(options);
        this.border("0.5px solid white");
        this.borderRadius(5);
        this.width(120);
        this.height(30);
        this.padding([0, 5]);
        this.text(text);
        // this.overflow("hidden");
        const mainLayout = this.mainLayout();
        // this.focus();
        this.addChild(mainLayout);
    }

    text(opt) {
        const text = this.__valueHandler(opt, "text", "");
        this.#inputSide?.set({ text: String(this.#currentVal) });
        this.#currentVal = Number(text);
        return text;
    }

    inputType(type) {
        return this.__valueHandler(type, "inputType", "text");
    }

    hideInput(hide) {
        return this.__valueHandler(hide, "hide", false);
    }

    // focus(opt) {
    //     const focus = this.__valueHandler(opt, "focus", true);
    //     if (!focus) return;
    //     const clickevent = (e) => {
    //         const inbound = this.checkInBound(e);
    //         if (inbound === this.focused()) {
    //             const width = !inbound ? 0.5 : 4;
    //             this.borderWidth(width);
    //             this.focused(!inbound);
    //             this.invokeChange();
    //         }
    //     };
    //     this.eventHandler("click", clickevent, "focusClick");
    // }

    focused(opt) {
        return this.__valueHandler(opt, "focus", false);
    }

    mainLayout() {
        const controls = this.controlSide();
        const inputs = this.inputSide();

        const mainLayout = new LayoutBlock({
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-around",
        });
        mainLayout.addChild(inputs, controls);
        this.#controlSide = mainLayout;
        return mainLayout;
    }

    inputSide() {
        this.#inputSide = new TextBlock(this.text(), {
            width: "100%",
            // minWidth: 20,
            height: 10,
            fontSize: 14,
            color: "white",
            editable: true,
            selectable: true,
            hotLines: false,
        });
        return this.#inputSide;
    }

    numericalControls() {
        const arrowUp = new ImageBlock(ArrowDown, {
            width: 15,
            height: 15,
            objectFit: "fill",
            important: {
                rotate: 3.14,
            },
            selectable: true,
            hotLines: false,
        });

        arrowUp.click((e) => {
            console.log("works");
            this.#currentVal += 1;
            this.text(String(this.#currentVal));
        });

        arrowUp.mousedown((e) => {
            arrowUp.set({ width: 10, height: 15 });
        });

        arrowUp.mouseup((e) => {
            arrowUp.set({ width: 15, height: 15 });
        });

        const arrowDown = new ImageBlock(ArrowDown, {
            width: 15,
            height: 15,
            objectFit: "fill",
            selectable: true,
            hotLines: false,
        });

        arrowDown.mousedown((e) => {
            arrowDown.set({ width: 10, height: 15 });
        });

        arrowDown.mouseup((e) => {
            arrowDown.set({ width: 15, height: 15 });
        });

        arrowDown.click((e) => {
            console.log("works");

            this.#currentVal -= 1;
            this.text(String(this.#currentVal));
        });

        const arrowLayout = new LayoutBlock({
            flexDirection: "column",
            width: 20,
            minWidth: 20,
            height: "100%",
            alignItems: "center",
        });

        arrowLayout.addChild(arrowUp, arrowDown);
        return arrowLayout;
    }

    textControls() {
        const empty = new Block({ width: 0, height: 0 });
        return empty;
    }

    controlSide() {
        if (this.inputType() === "number") return this.numericalControls();
        else return this.textControls();
    }
}
