import * as React from "react";
import * as ReactDom from "react-dom";
import { Application } from "./components/Application/Component_Application";

window.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("application");
    console.log(element);
    ReactDom.render(<Application></Application>, element);
});
