import React from "react";
import Classes from "./Task.scss";

const Task = (props) => {
    const completed = props.completed ? "checked" : "";

    return (

        <div className={Classes.task}>
            <div className={Classes.body}>
                <span className={Classes["task-check"]}>
                    <input type="checkbox" className={Classes["hidden-box"]} value="0" id={props.id} checked={completed} onChange={() => null} />
                    <label htmlFor="first" className={Classes["check-label"]}
                        onClick={(event) => props.changed(event, props.id)}>
                        <span className={Classes["label-box"]}></span>
                    </label>
                </span>

                <span className={Classes.text}>
                    {props.task}
                </span>
            </div>
        </div>
    )
}

export default Task;