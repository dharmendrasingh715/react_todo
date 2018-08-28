import React from "react";
import Classes from "../../containers/App.scss";


const Header = (props) => {

    return (
        <div className={Classes.header}>
            <input
                type="text"
                id="new-task"
                className={Classes["new-task"]}
                placeholder="Add new task" />

            <button className={Classes["add-task"]} onClick={(event) => props.clicked(event)}>
                <i className={[Classes["save-button"], "fa-save", "fa"].join(" ")} ></i>
            </button>
        </div>
    )
}

export default Header;