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
                <label className={styles["label-item"]}>
                    <span className={styles.label}>account:</span>
                    <input
                        type="text"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    ></input>
                </label>
                {/* <div>{account !== "account" ? "ACCOUNT IS WRONG" : ""}</div> */}
                <label className={styles["label-item"]}>
                    <span className={styles.label}>password:</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </label>
                {/* <div>{password !== "password" ? "PASSWORD IS WRONG" : ""}</div> */}
            </form>
        </div>
    );
}
