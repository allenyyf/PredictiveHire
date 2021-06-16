import React, { ReactElement, useState } from "react";
import Menu from "./Menu";
import styles from "./style/menuItem.module.scss";
import { useDispatch } from "react-redux";

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

    const [isHover, setHover] = useState(false);
    const dispatch = useDispatch();

    function clickButton(fireDialog: boolean | undefined) {
        if (fireDialog) {
            dispatch({ type: "display" });
        }
    }
    return (
        <div className={styles["item-bar"]} title="menuItem">
            <button
                key={name}
                className={styles["item-button"]}
                onMouseEnter={() => setHover(true)}
                onClick={() => clickButton(fireDialog)}
            >
                {name}
            </button>
            <span
                onMouseLeave={() => setHover(false)}
                className={
                    styles[
                        `subMenu-container-${
                            nextMenuDirection ? nextMenuDirection : ""
                        }`
                    ]
                }
            >
                {hasNestedMenu && isHover ? (
                    <Menu menu={nestedMenu as Menu} />
                ) : null}
            </span>
        </div>
    );
}
