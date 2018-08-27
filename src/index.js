import React from "react";
import ReactDom from "react-dom";
import "./styles/main.scss"
import App from "./containers/App";
import {HashRouter, Route, Link } from "react-router-dom"; 

ReactDom.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById("root")
);