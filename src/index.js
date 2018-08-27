import React from "react";
import ReactDom from "react-dom";
import "./styles/main.scss"
import App from "./containers/App";
import {BrowserRouter, Route, Link } from "react-router-dom"; 

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root")
);