import * as React from "react";
import { Component_Canvas } from "./Component_Canvas"

export class Application extends React.Component {
    render() {
        return (
            <div id="application">
                <Component_Canvas width={10} height={10} pixels={new Uint8ClampedArray()}></Component_Canvas>
            </div>
        );
    }
}