export function displayDialog(payload: Dialog) {
    return {
        type: "display",
        payload,
    };
}

export function hideDialog(payload: Dialog) {
    return {
        type: "hide",
        payload,
    };
}
