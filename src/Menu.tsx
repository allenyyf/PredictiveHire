import React, { ReactElement } from "react";
import styles from "./style/menu.module.scss";
import MenuItem from "./MenuItem";

interface Props {
    menu: Menu;
    controlDialog?: (value: boolean) => void;
}

export default function Menu({ menu, controlDialog }: Props): ReactElement {
    let menuItemList = menu.itemList;
    console.log(menuItemList);
    // function fireDialog(item: MenuItem) {
    //     if (item.fireDialog && controlDialog) {
    //         controlDialog(true);
    //     }
    // }
    return (
        <div className={styles["menu-" + menu.direction]}>
            {menuItemList.map((menuItem) => (
                <MenuItem key={menuItem.name} meunItem={menuItem}></MenuItem>
            ))}
        </div>
    );
}
