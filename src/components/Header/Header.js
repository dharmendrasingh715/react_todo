import React from "react";
import Classes from "../Task/Task.scss";


const Header = (props) => {

    return (
        <div className={Classes.header}>
            <input
                type="text"
                id="new-task"
                className={Classes["new-task"]}
                placeholder="Add new task" />

            <button className={Classes["add-task"]}>
                <i className={[Classes["save-button"], "fa-save", "fa"].join(" ")}></i>
            </button>
        </div>
    )
}

export default Header;