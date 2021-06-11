type menuDirection = "horizontal" | "vertical";

type menuType = "mobile" | "desktop";

interface menu {
    menuType: menuType;
    direction: menuDirection;
    itemList: menuItem[];
}

interface menuItem {
    name: string;
    clickable: boolean;
    hasNestedMenu: boolean;
    nestedMenu?: menu;
}
