export function displayDialog(payload: Dialog): DialogAction {
    return {
        type: "display",
        payload,
    };
}

export function hideDialog(payload: Dialog): DialogAction {
    return {
        type: "hide",
        payload,
    };
}
