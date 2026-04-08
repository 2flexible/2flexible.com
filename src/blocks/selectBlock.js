import {
    LayoutBlock,
    RectangleBlock,
    ImageBlock,
} from "@2flexible/2flex";

import ArrowDown from "@site/static/img/arrowdown.svg"


//  need to fix add remove of current value in main select
export class SelectBlock extends RectangleBlock {
    #dropDownImage;
    #currentLayout;
    constructor(options) {
        super(options);
        this.backgroundColor("rgba(201, 201, 201, 0.2)");
        this.border("0.5px solid black");
        this.borderRadius(5);
        this.width(80);
        this.height(30);
        this.dropDownImage();
        this.selectable(true);
        this.draggable(true);
        this.padding([0, 10]);

        const mainLayout = new LayoutBlock({
            width: "100%",
            height: "100%",
            alignItems: "center",
        });

        const selectBg = new RectangleBlock({
            width: this.width(),
            minWidth: this.width(),
            height: 200,
            minHeight: 200,
            borderRadius: 5,
            backgroundColor: "rgba(67, 67, 67, 0.41)",
            position: "relative",
            top: 30,
            left: -10,
            important: { hidden: true },
        });

        const selectLayout = new LayoutBlock({
            layout: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
        });

        const opts = this.selectOptions();
        for (let [index, optt] of Object.entries(opts)) {
            const opt = optt();
            const innerLayout = new LayoutBlock({
                width: "100%",
                height: "100%",
                alignItems: "center",
                padding: [0, 10],
                selectable: true,
            });

            if (this.defaultIndex() === Number(index)) {
                const layout = this.getLayout(optt());
                layout.order(0);
                this.#currentLayout = layout;
            }

            // innerLayout.click((e) => {
            //     mainLayout.removeChild(this.#currentLayout);
            //     const layout = this.getLayout(optt());
            //     // layout.order(1);
            //     mainLayout.addChild(layout);
            //     this.#currentLayout = layout;
            // });
            innerLayout.addChild(opt);

            selectLayout.addChild(innerLayout);
        }

        if (this.#currentLayout) mainLayout.addChild(this.#currentLayout);
        // mainLayout.addChild(this.#dropDownImage);
        selectBg.addChild(selectLayout);

        this.addChild(mainLayout, selectBg);

        // this.click((e) => {
        //     const isHidden = selectLayout.hidden();
        //     selectBg.set({ important: { hidden: !isHidden } });
        //     const degree = isHidden ? 3.14 : 0;
        //     this.#dropDownImage.set({
        //         important: {
        //             rotate: degree,
        //         },
        //     });
        // });
    }

    getLayout(block) {
        const newClone = new LayoutBlock({
            width: "100%",
            height: "100%",
            alignItems: "center",
            selectable: false,
        });
        newClone.addChild(block);
        return newClone;
    }

    dropDownImage(image) {
        this.#dropDownImage = new ImageBlock(ArrowDown, {
            width: 30,
            height: 20,
            objectFit: "fill",
            order: 0,
        });
    }

    defaultIndex(index) {
        return this.__valueHandler(index, "defaultIndex", 0);
    }

    selectOptions(options) {
        return this.__valueHandler(options, "selectOptions", []);
    }
}
