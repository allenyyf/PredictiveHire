import React, { ReactElement, useState } from "react";
import Menu from "./Menu";
import styles from "./style/menuItem.module.scss";

interface Props {
    meunItem: MenuItem;
}

export default function MenuItem({ meunItem }: Props): ReactElement {
    let {
        type,
        name,
        clickable,
        hasNestedMenu,
        nestedMenu,
        fireDialog,
        nextMenuDirection,
    } = meunItem;

    const [isClick, setClick] = useState(false);

    return (
        <div className={styles["item-bar"]}>
            <button
                key={name}
                className={styles["item-button"]}
                onClick={() => setClick(true)}
            >
                {name}
            </button>
            <span
                className={
                    styles[
                        `subMenu-container-${
                            nextMenuDirection ? nextMenuDirection : ""
                        }`
                    ]
                }
            >
                {hasNestedMenu && isClick ? (
                    <Menu menu={nestedMenu as Menu} />
                ) : null}
            </span>
        </div>
    );
}
