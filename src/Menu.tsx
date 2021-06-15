import React, { ReactElement } from "react";
import styles from "./style/menu.module.scss";
import MenuItem from "./MenuItem";

interface Props {
    menu: Menu;
}

export default function Menu({ menu }: Props): ReactElement {
    let menuItemList = menu.itemList;
    return (
        <div className={styles["menu-" + menu.direction]}>
            {menuItemList.map((menuItem) => (
                <MenuItem key={menuItem.name} meunItem={menuItem}></MenuItem>
            ))}
        </div>
    );
}
