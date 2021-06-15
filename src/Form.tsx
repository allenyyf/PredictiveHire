import React, { ReactElement, useState } from "react";
import styles from "./style/form.module.scss";
interface Props {}

export default function Form({}: Props): ReactElement {
    let [account, setAccount] = useState(""),
        [password, setPassword] = useState("");

    return (
        <div>
            <form className={styles["container"]}>
                <div className={styles["label-item"]}>
                    <label className={styles.label}>account:</label>
                    <input
                        type="text"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    ></input>
                </div>
                <div className={styles["label-item"]}>
                    <label className={styles.label}>password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
            </form>
        </div>
    );
}
