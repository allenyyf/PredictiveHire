import reducer from "../redux/dialogReducer";

describe("dialog-redux", () => {
    test("should return the initial state", () => {
        expect(reducer(undefined, {} as DialogAction)).toEqual({
            display: false,
        });
    });

    test("should handle displayDialog", () => {
        expect(reducer(undefined, { type: "display" })).toEqual({
            display: true,
        });
    });
    test("should handle hideDialog", () => {
        expect(reducer(undefined, { type: "hide" })).toEqual({
            display: false,
        });
    });
});
