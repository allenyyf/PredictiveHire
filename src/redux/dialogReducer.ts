const initialState = {
    display: false,
};

export default function dialogReducer(
    state = initialState,
    action: DialogAction
) {
    let { type } = action;
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

function a({}: Dialog): void {}
