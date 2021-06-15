const initialState = {
    display: false,
};

type ActionType = "display" | "hide";

interface Action {
    type: ActionType;
    payload: Dialog;
}

export default function dialogReducer(state = initialState, action: Action) {
    let { type, payload } = action;
    switch (type) {
        case "display":
            return { display: true };
        case "hide": {
            return { display: false };
        }
        default:
            return state;
    }
}
