import React, {Component} from "react";
import Classes from './App.scss';
import Task from "../components/Task/Task";


class Tasks extends Component {
    render() {
        return (
            <div className={Classes.tasks}>
            <Task />
            </div>
        );
    }
}

export default Tasks;