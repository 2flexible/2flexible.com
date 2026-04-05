import { TextBlock } from "@2flexible/2flex";

export function SimpleTextExample() {
    const text = new TextBlock("Hello World", {
        width: 120,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        fontSize: "80px",
    });
    return [text];
}

export function WrapTextExample() {
    const text = new TextBlock("Wrap Option: word", {
        width: 200,
        maxWidth: Infinity,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        wrap: "word",
        resizable: true,
        selectable: true,
        draggable: true,
        fontSize: "40px",
    });

    const textNoWrap = new TextBlock("Wrap Option: letter", {
        width: 90,
        maxWidth: Infinity,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        resizable: true,
        selectable: true,
        draggable: true,
        fontSize: "40px",
        position: "relative",
        right: 240,
    });

    const textWrapLetter = new TextBlock("Wrap Option: nowrap", {
        position: "relative",
        left: 180,
        width: 30,
        maxWidth: Infinity,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "white",
        wrap: "letter",
        resizable: true,
        selectable: true,
        draggable: true,
        fontSize: "40px",
    });
    return [text, textWrapLetter, textNoWrap];
}

export function ResizableHeightTextExample() {
    const text = new TextBlock("Try to resize height of text.", {
        width: 300,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        y: "30%",
        fontSize: "50px",
        resizeLineHeight: true,
        resizable: true,
        selectable: true,
        draggable: true,
    });
    return [text];
}

export function EditableTextExample() {
    const editing = new TextBlock("Click twice to edit me.", {
        width: 300,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        fontSize: "50px",
        editable: true,
        selectable: true,
        position: "absolute",
        bottom: 10,
        right: 0,
        hidden: true,
    });
    const callbackEdit = (e) => {
        editing.set({ hidden: false });
    };
    const text = new TextBlock("Click twice to edit me.", {
        width: 300,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        y: "30%",
        fontSize: "50px",
        editable: true,
        selectable: true,
        onEdit: callbackEdit,
    });
    return [text];
}

export function StrokeTextExample() {
    const text = new TextBlock("I have a stroke", {
        width: 120,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        fontSize: "80px",
        strokeWidth: 3,
        strokeColor: "white",
    });
    return [text];
}

export function CustomTextExample() {
    const text = new TextBlock("Hello World", {
        width: 120,
        height: 60,
        fontFamily: "KulminoituvaRegular",
        color: "blue",
        fontSize: "80px",
        fontKerning: "normal",
        textRendering: "optimizeLegibility",
        fontStretch: "expanded",
        direction: "ltr"
    });
    return [text];
}
