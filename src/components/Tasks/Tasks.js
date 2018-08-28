import React, { Component } from "react";
import Classes from './Tasks.scss';
import Task from "../../components/Task/Task";

class Tasks extends Component {
    changeTaskStateHandler = (event, id) => {
        event.preventDefault();

        const taskIndex = this.props.tasks.findIndex(t => t.id === id);

        const task = {
            ...this.props.tasks[taskIndex]
        };

        task.completed = !task.completed;

        const tasks = [...this.props.tasks];
        tasks[taskIndex] = task;

        this.props.updateState(tasks);
    };

    render() {
        console.log(this.props);
        var tasks, taskState;
        if (this.props.show == 'all') {
            tasks = this.props.tasks.map((task, index) => {
                return <Task key={index} id={task.id} task={task.task} completed={task.completed} changed={this.changeTaskStateHandler} />
            });
        } else {
            taskState = this.props.show == 'incomplete' ? false : true;
            console.log(taskState);

            tasks = this.props.tasks.filter((task) => {
                console.log(task);

                return task.completed == taskState
            }).map((task, index) => {
                return <Task key={index} id={task.id} task={task.task} completed={task.completed} changed={this.changeTaskStateHandler} />
            });
        }

        return (
            tasks
        );
    }
}

export default Tasks;