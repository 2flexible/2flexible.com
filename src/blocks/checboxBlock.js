import { RectangleBlock, ImageBlock } from "@2flexible/2flex";
import Checked from "@site/static/img/checked.svg";

// writing checkbox as function less customizable
export function CheckBox() {
    let checked = false;

    const boundry = new RectangleBlock({
        x: 250,
        y: 200,
        width: 20,
        height: 20,
        borderRadius: 5,
        border: "1px solid black",
    });
    const checkedIm = new ImageBlock(Checked, {
        width: "100%",
        height: "100%",
        objectFit: "fill",
        important: {
            hidden: !checked,
        },
    });
    boundry.addChild(checkedIm);

    boundry.click((e) => {
        checked = !checked;

        boundry.set({
            backgroundColor: checked ? "blue" : "transparent",
        });
        checkedIm.set({
            important: {
                hidden: !checked,
            },
        });
    });
    return boundry;
}

// writing checkbox with class more customization
export class CheckboxBlock extends RectangleBlock {
    #checkIm;

    constructor(options) {
        super(options);
        this.border("1px solid black");
        this.borderRadius(5);
        this.width(20);
        this.height(20);
        this.checkedImage();
        this.checkable(true);
    }

    checked(isChecked) {
        return this.__valueHandler(isChecked, "checked", false);
    }

    checkInBackground(color) {
        return this.__valueHandler(color, "checkInBackground", "blue");
    }

    checkedImage(image) {
        this.#checkIm = new ImageBlock(image || Checked, {
            width: "100%",
            height: "100%",
            objectFit: "fill",
            important: {
                hidden: !this.checked(),
            },
        });
        this.removeChild(this.#checkIm);
        this.addChild(this.#checkIm);
    }

    checkable(opt) {
        const check = this.__valueHandler(opt, "checked", true);
        if (!check) return;
        this.click((e) => {
            this.set({
                backgroundColor: this.checked()
                    ? this.checkInBackground()
                    : "transparent",
            });
            this.#checkIm.set({
                important: {
                    hidden: !this.checked(),
                },
            });
            this.checked(!this.checked());
        });
    }
}
