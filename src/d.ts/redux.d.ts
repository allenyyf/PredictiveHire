type DialogActionType = "display" | "hide";

interface DialogAction {
    type: DialogActionType;
    payload?: Dialog;
}
