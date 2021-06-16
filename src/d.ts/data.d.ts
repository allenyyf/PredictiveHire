type MenuDirection = "horizontal" | "vertical";

type MenuType = "mobile" | "desktop";

type MenuItemType = "dialog" | "subMenu" | "normal";

type SubMenuDirection = "top" | "right" | "bottom" | "left";

interface Menu {
    menuType: MenuType;
    direction: MenuDirection;
    itemList: MenuItem[];
}

interface MenuItem {
    name: string;
    clickable: boolean;
    type: MenuItemType;
    hasNestedMenu: boolean;
    nestedMenu?: Menu;
    fireDialog?: boolean;
    nextMenuDirection?: SubMenuDirection;
}

interface Dialog {
    title: string;
}

interface LoginFormData {
    account: string;
    password: string;
}
