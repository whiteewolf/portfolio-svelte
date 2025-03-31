export function onClickOutside(node, callback) {
    if (typeof document === "undefined") return; // Проверка за SSR

    function handleClick(event) {
        if (node && !node.contains(event.target)) {
            callback();
        }
    }

    document.addEventListener("click", handleClick, true);

    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        }
    };
}
