import React, { ReactElement, useState } from "react";

interface Props {}

export default function Form({}: Props): ReactElement {
    let [account, setAccount] = useState(""),
        [password, setPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label>account:</label>
                    <input
                        type="text"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>password:</label>
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
