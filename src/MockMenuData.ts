const ForthLanyerMenu: Menu = {
    menuType: "desktop",
    direction: "vertical",
    // direction: "vertical",
    itemList: [
        {
            name: "forth-level-test",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "forth-level-test2",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
        },
        {
            name: "forth-level-test3",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
        },
    ],
};

const ThirdLanyerMenu: Menu = {
    menuType: "desktop",
    direction: "vertical",
    // direction: "vertical",
    itemList: [
        {
            name: "third-level-test",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "third-level-test2",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
        },
        {
            name: "third-level-test3",
            clickable: false,
            type: "normal",
            hasNestedMenu: true,
            nestedMenu: ForthLanyerMenu,
            nextMenuDirection: "right",
        },
    ],
};
const SecondLayerMenu: Menu = {
    menuType: "desktop",
    direction: "vertical",
    // direction: "vertical",
    itemList: [
        {
            name: "second-level-test",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "second-level-test2",
            clickable: false,
            type: "normal",
            hasNestedMenu: true,
            nestedMenu: ThirdLanyerMenu,
            nextMenuDirection: "right",
        },
        {
            name: "second-level-test3",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
        },
    ],
};

export const MockMenuData: Menu = {
    menuType: "desktop",
    direction: "horizontal",
    // direction: "vertical",
    itemList: [
        {
            name: "test",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "test1",
            clickable: false,
            type: "normal",
            hasNestedMenu: true,
            nestedMenu: SecondLayerMenu,
            nextMenuDirection: "bottom",
        },
        {
            name: "test2",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
        },
    ],
};
