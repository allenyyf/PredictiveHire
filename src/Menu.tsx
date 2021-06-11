import React, { ReactElement } from "react";
import styles from "./style/menu.module.scss";

interface Props {
    menu: menu;
}

export default function Menu({ menu }: Props): ReactElement {
    let menuItemList = menu.itemList;
    return (
        <div className={styles["menu-" + menu.direction]}>
            {menuItemList.map((item) => (
                <button key={item.name} className={styles.button}>
                    {item.name}
                </button>
            ))}
        </div>
    );
}
