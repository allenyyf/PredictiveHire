import styles from "./style/dialog.module.scss";

import React, { ReactElement, useState } from "react";

interface Props {
    controlDialog: (val: boolean) => void;
    children?: React.ReactNode;
}

export default function Dialog({
    controlDialog,
    children,
}: Props): ReactElement {
    // const [visible, setVisible] = useState(isShow);
    // let convertToDisplay
    // function closeDialog() {
    //     store.dialogShow = false;
    // }

    return (
        <div className={styles.container}>
            <div className={styles.dialog}>
                <div className={styles.header}>
                    <button
                        className={styles.button}
                        onClick={() => controlDialog(false)}
                    >
                        X
                    </button>
                </div>
                <div className={styles.content}>{children}</div>
                <div className={styles.footer}>
                    <button className={styles.button}>submit</button>
                    <button
                        className={styles.button}
                        onClick={() => controlDialog(false)}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
