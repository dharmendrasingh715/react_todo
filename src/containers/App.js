import React, {Component} from "react";
import Classes from './App.scss';
import Task from "../components/Task/Task";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [{
                id: 1,
                task: "Test this task",
                completed: false
            },{
                id: 2,
                task: "Push it to github",
                completed: false
            }]
        }
    }

    changeTaskStateHandler = (event,id) => {
        event.preventDefault();

        const taskIndex = this.state.tasks.findIndex(t => t.id === id );

        const task = {
            ...this.state.tasks[taskIndex]
        };

        task.completed = !task.completed;

        var tasks = [...this.state.tasks];
        tasks[taskIndex] = task;

        this.setState({
            tasks: tasks
        })
    };
    getId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    addTaskHandler = (event) => {
        event.preventDefault();
        const inputText = event.currentTarget.previousSibling;
        if (inputText.value !== "") {
            var newTask = {
              id: this.getId(),
              task: inputText.value,
              completed: false
            };
            console.log("previous state:" + this.state.tasks);

            this.setState((prevState) => {
              return { 
                tasks: prevState.tasks.concat(newTask) 
              };
            });
           
            inputText.value = "";
          }
    }

    render() {
        console.log(this.state.tasks);
        const tasks = this.state.tasks.map((task, index)=>{
            return <Task key={index} id = {task.id} task = {task.task} completed = {task.completed} changed = {this.changeTaskStateHandler}/>
        })
        
        return (
            <div className={Classes.tasks}>
            <Header clicked={this.addTaskHandler} />
            {tasks}
            <Footer/>
            </div>
        );
    }
}

export default Tasks;