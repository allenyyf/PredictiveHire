import styles from "./style/dialog.module.scss";

import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
    children?: React.ReactNode;
}

export default function Dialog({ children }: Props): ReactElement {
    const display = useSelector((state) => state.display);
    const dispatch = useDispatch();
    return (
        <div>
            {display ? (
                <div className={styles.container}>
                    <div className={styles.dialog}>
                        <div className={styles.header}>
                            <button
                                className={styles.button}
                                onClick={() => dispatch({ type: "hide" })}
                            >
                                X
                            </button>
                        </div>
                        <div className={styles.content}>{children}</div>
                        <div className={styles.footer}>
                            <button className={styles.button}>submit</button>
                            <button
                                className={styles.button}
                                onClick={() => dispatch({ type: "hide" })}
                            >
                                cancel
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
