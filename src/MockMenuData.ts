const ForthLanyerMenu: Menu = {
    menuType: "desktop",
    direction: "vertical",
    // direction: "vertical",
    itemList: [
        {
            name: "forth-level-clickable",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "forth-level-normal",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
        },
        {
            name: "forth-level-normal",
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
            name: "third-level-clickable",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "third-level-normal",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
        },
        {
            name: "third-level-nested-menu",
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
            name: "second-level-clickable",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "second-level-nested-menu",
            clickable: false,
            type: "normal",
            hasNestedMenu: true,
            nestedMenu: ThirdLanyerMenu,
            nextMenuDirection: "right",
        },
        {
            name: "second-level-normal",
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
            name: "clickable",
            clickable: false,
            hasNestedMenu: false,
            type: "dialog",
            fireDialog: true,
        },
        {
            name: "nested-menu",
            clickable: false,
            type: "normal",
            hasNestedMenu: true,
            nestedMenu: SecondLayerMenu,
            nextMenuDirection: "bottom",
        },
        {
            name: "normal",
            clickable: false,
            type: "normal",
            hasNestedMenu: false,
            fireDialog: false,
        },
    ],
};
