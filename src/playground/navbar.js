import {
    LayoutBlock,
    RectangleBlock,
    TextBlock,
    ImageBlock,
    Block,
} from "@2flexible/2flex";

import Undo from "@site/static/img/undo.svg"
import Redo from "@site/static/img/redo.svg"


export function NavbarMenu() {
    const background = new RectangleBlock({
        width: "95%",
        height: 40,
        backgroundColor: "rgba(60, 60, 60, 1)",
        borderRadius: 10,
        position: "fixed",
        top: 20,
        left: 40,
    });

    const navbarLayout = new LayoutBlock({
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: [0, 20],
        justifyContent: "space-between",
    });

    const leftBarLayout = leftBar();
    const centerBarLayout = centerBar();
    const rightBarLayout = rightBar();

    navbarLayout.addChild(leftBarLayout, centerBarLayout, rightBarLayout);
    background.addChild(navbarLayout);
    return [background];
}

function leftBar() {
    const layout = new LayoutBlock({
        alignItems: "center",
        width: 300,
        height: 60,
    });
    const view = new TextBlock("View", {
        width: 60,
        height: 20,
        fontSize: 16,
        color: "white",
        selectable: true,
        hotLines: false,
    });
    const edit = new TextBlock("Edit", {
        width: 60,
        height: 20,
        fontSize: 16,
        color: "white",
        selectable: true,
        hotLines: false,
    });
    layout.addChild(view, edit);
    return layout;
}

function rightBar() {
    const rightLayout = new LayoutBlock({
        alignItems: "center",
        width: 150,
        height: 20,
        gap: 20,
    });

    const saveButtonBg = saveButton();
    const loadButtonBg = loadButton();

    rightLayout.addChild(loadButtonBg, saveButtonBg);
    return rightLayout;
}

function saveButton() {
    const background = new RectangleBlock({
        width: 60,
        height: 20,
        backgroundColor: "rgb(112, 112, 112)",
        borderRadius: 5,
        // padding: [5, 5],
        selectable: true,
        hotLines: false,
    });

    const saveText = new TextBlock("Save", {
        width: "100%",
        height: "100%",
        fontSize: 16,
        color: "white",
    });

    background.click((e) => {
        const paylaod = background.canvas.export();
        const size = new TextEncoder().encode(paylaod).length;
        const kilobite = size / (1024 * 1024);
        const animation = background.canvas.find({
            name: "animationSave",
        })?.[0];
        animation?.set({
            text: `${kilobite.toFixed(2)} Kb size payload saved`,
        });
        animation?.animationStart("text-animation");
        // localStorage.setItem("payload", paylaod);
        // localStorage.setItem("title", document.title);
    });

    background.addChild(saveText);
    return background;
}

function loadButton() {
    const background = new RectangleBlock({
        width: 60,
        height: 20,
        backgroundColor: "rgb(200, 200, 200)",
        borderRadius: 5,
        padding: [3, 9],
        selectable: true,
        hotLines: false,
    });

    const loadText = new TextBlock("Load", {
        width: "100%",
        height: "100%",
        fontSize: 16,
        color: "black",
        editable: true,
        selectable: true,
    });

    background.click(() => {
        const p = prompt("Please enter Json payload:");
        background.canvas.load(p);
    });
    background.addChild(loadText);
    return background;
}

function centerBar() {
    const layout = new LayoutBlock({
        alignItems: "center",
        width: 300,
        height: 60,
        gap: 20,
    });
    const background = new RectangleBlock({
        width: 120,
        height: 20,
        backgroundColor: "rgb(200, 200, 200)",
        borderRadius: 5,
        padding: [3, 20],
        selectable: true,
        // overflow: "hidden",
        hotLines: false,
    });
    const title = localStorage.getItem("title") || document.title;
    const inputText = new TextBlock(title, {
        name: "titleTextBlock",
        width: "100%",
        height: "100%",
        fontSize: 16,
        color: "black",
        selectable: true,
        hotLines: false,
        editable: true,
    });
    inputText.onEdit(() => {
        document.title = inputText.text();
    });
    console.log(Undo)
    const undo = new ImageBlock(Undo.default, {
        width: 20,
        height: 20,
        objectFit: "fill",
        selectable: true,
        hotLines: false,
    });
    const redo = new ImageBlock(Redo.default, {
        width: 20,
        height: 20,
        objectFit: "fill",
        selectable: true,
        hotLines: false,
    });
    undo.click(() => {
        undo.canvas.redo();
    });
    redo.click(() => {
        console.log("unmdo");
        redo.canvas.undo();
    });
    console.log(Block.name);
    background.addChild(inputText);
    layout.addChild(background, redo, undo);
    return layout;
}
