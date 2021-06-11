import React, { Component } from "react";

interface Props {}
interface State {
    isShow: boolean;
}

export default class Dialog extends Component<Props, State> {
    state: State = {
        isShow: false,
    };

    render() {
        return <div>dialog</div>;
    }
}
