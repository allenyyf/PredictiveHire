import React, { ReactElement, useState, useEffect } from "react";
import styles from "./style/form.module.scss";
interface Props {
    setFormData: React.Dispatch<React.SetStateAction<LoginFormData>>;
}

export default function Form({ setFormData }: Props): ReactElement {
    let [account, setAccount] = useState(""),
        [password, setPassword] = useState("");

    useEffect(() => {
        setFormData({ account, password });
    }, [account, password]);

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
                {/* <div>{account !== "account" ? "ACCOUNT IS WRONG" : ""}</div> */}
                <div className={styles["label-item"]}>
                    <label className={styles.label}>password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                {/* <div>{password !== "password" ? "PASSWORD IS WRONG" : ""}</div> */}
            </form>
        </div>
    );
}
