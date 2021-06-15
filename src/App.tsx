import React, { ReactElement, useState } from "react";
import Menu from "./Menu";
import Dialog from "./Dialog";
import styles from "./style/app.module.scss";
import Form from "./Form";
import { MockMenuData } from "./MockMenuData";

interface Props {}

export default function App({}: Props): ReactElement {
    return (
        <div className={styles.app}>
            <Menu menu={MockMenuData}></Menu>
            {/* {dialogShow ? ( */}
            <Dialog>
                <Form></Form>
            </Dialog>
            {/* ) : null} */}
        </div>
    );
}
