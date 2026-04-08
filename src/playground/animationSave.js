import { TextBlock } from "@2flexible/2flex";
export function SaveAnimation() {
    const animationSave = new TextBlock("start", {
        name: "animationSave",
        position: "fixed",
        bottom: 20,
        left: 20,
        width: 60,
        height: 20,
        fontSize: 16,
        color: "white",
        opacity: 0,
    });
    animationSave.animate({
        id: "text-animation",
        opacity: [100, 0],
        duration: 5000,
        autoStart: false,
        iterations: 1,
        easing: "ease-in-out",
    });
    return [animationSave];
}
