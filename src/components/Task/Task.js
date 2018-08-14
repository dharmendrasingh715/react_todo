import React from "react";
import Classes from "./Task.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const task = (props) => {
  
    return (
        <div className={Classes.task}>
            {/* <div className={Classes.header}>
                <input 
                type="text" 
                id="new-task" 
                className={Classes["new-task"]} 
                placeholder="Add new task" />

                <button className={Classes["add-task"]}>
                    <i className={[Classes["save-button"],"fa-save","fa"].join(" ")}></i>
                </button>
            </div> */}
            <Header />
            <div className={Classes.body}>
                <span className={Classes["task-check"]}>
                    <input type="checkbox" name="checkbox" id="first" className={Classes["hidden-box"]} />
                    <label htmlFor="first" className={Classes["check-label"]}>
                        <span className={Classes["label-box"]}></span>
                    </label>
                </span>

                <span className={Classes.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </div>
            {/* <div className={Classes.footer}>
                <span>
                    <a href="#">All</a>
                </span>
                <span>
                    <a href="#">Completed</a>
                </span>
                <span>
                    <a href="#">Clear Completed</a>
                </span>
            </div> */}
            <Footer />
        </div>
    )
}

export default task;