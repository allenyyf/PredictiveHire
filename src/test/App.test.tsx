import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("App run", () => {
    const { container } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(container).toBeTruthy();
});

test("menu render number", () => {
    render(
        <Provider store={store}>
            <App></App>
        </Provider>
    );
    let list = screen.getAllByTitle("menuItem");
    expect(list.length).toBe(3);
});

test("menu item clcik fire dialog display, dialog display and hide", () => {
    render(
        <Provider store={store}>
            <App></App>
        </Provider>
    );
    let item = screen.getByText("clickable");
    fireEvent.click(item);

    //test dialog display
    let dialog = screen.getByTitle("dialog-container");
    expect(dialog).toBeInTheDocument();

    //test dialog hide(cancel button)
    let cancelButton = screen.getByTitle("cancel-button");
    fireEvent.click(cancelButton);
    expect(dialog).not.toBeInTheDocument();

    //display again
    fireEvent.click(item);
    let dialogTwice = screen.getByTitle("dialog-container");
    expect(dialogTwice).toBeInTheDocument();

    //test dialog hide(close button)
    let closeButton = screen.getByTitle("close-button");
    fireEvent.click(closeButton);
    expect(dialogTwice).not.toBeInTheDocument();
});
