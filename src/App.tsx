import React from "react";
import Menu from "./Menu";

const menuData: menu = {
    menuType: "desktop",
    direction: "horizontal",
    // direction: "vertical",
    itemList: [
        {
            name: "test",
            clickable: false,
            hasNestedMenu: false,
        },
        {
            name: "test1",
            clickable: false,
            hasNestedMenu: false,
        },
        {
            name: "test2",
            clickable: false,
            hasNestedMenu: false,
        },
    ],
};

function App() {
    return (
        <div className="App">
            <Menu menu={menuData}></Menu>
        </div>
    );
}

export default App;
