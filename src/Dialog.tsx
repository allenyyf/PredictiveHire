import styles from "./style/dialog.module.scss";
import Form from "./Form";
import React, { ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

export default function Dialog({}: Props): ReactElement {
    const display = useSelector((state) => state.display);
    const dispatch = useDispatch(),
        [formData, setFormData] = useState({
            account: "",
            password: "",
        } as LoginFormData),
        [isFormDataRight, setFormDataRight] = useState(true);

    // useEffect(() => {
    //     checkFormValue();
    // }, [formData]);

    function submit() {
        checkFormValue();
        if (isFormDataRight) {
            requestForServer();
        }
    }

    function checkFormValue() {
        let { account, password } = formData;
        if (account !== "account" || password !== "password") {
            setFormDataRight(false);
        } else {
            setFormDataRight(true);
            dispatch({ type: "hide" });
        }
    }

    function requestForServer() {
        fetch("/testToServer", {
            method: "post",
            headers: {
                "Content-type":
                    "application/x-www-form-urlencoded; charset=UTF-8",
            },
            body: JSON.stringify(formData),
        });
    }

    return (
        <div>
            {display ? (
                <div className={styles.container} title="dialog-container">
                    <div className={styles.dialog}>
                        <div className={styles.header}>
                            <button
                                className={styles.button}
                                onClick={() => dispatch({ type: "hide" })}
                                title="close-button"
                            >
                                X
                            </button>
                        </div>
                        <div className={styles.content}>
                            <Form setFormData={setFormData}></Form>
                            <div className={styles["tips-container"]}>
                                {isFormDataRight
                                    ? ""
                                    : "ACCOUNT OR PASSWORD IS WRONG"}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <button
                                className={styles.button}
                                onClick={() => submit()}
                                title="submit-button"
                            >
                                submit
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => dispatch({ type: "hide" })}
                                title="cancel-button"
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
