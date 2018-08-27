import React, {Component} from "react";
import Classes from './App.scss';
import Header from "../components/Header/Header";
import Tasks from "../components/Tasks/Tasks";
import Footer from "../components/Footer/Footer";
import { Switch, Route } from 'react-router-dom';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [{
                id: this.getId(),
                task: "Test this task",
                completed: true
            },{
                id: this.getId(),
                task: "Push it to github",
                completed: false
            }]
        }
    }

    getId = () => {
        return  Math.random().toString(22).replace('0.', '') ;
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

            this.setState((prevState) => {
                const tasks = [...prevState.tasks];
                tasks.push(newTask);
                return { 
                    tasks: tasks 
                };
            });
           
            inputText.value = "";
          }
    }

    updateStateHandler = (tasks) => {
        this.setState({tasks: tasks});
    }

    render() {

        // var tasks = ();
        
        return (
            <div className={Classes.tasks}>
            <Header clicked={this.addTaskHandler} />
            <Switch>
                <Route exact path='/' render={(props)=>(<Tasks tasks={this.state.tasks} updateState={this.updateStateHandler} show="incomplete"/>)}/>
                <Route exact path='/completed' render={(props)=>(<Tasks tasks={this.state.tasks} updateState={this.updateStateHandler} show="completed"/>)}/>
                <Route exact path='/all' render={(props)=>(<Tasks tasks={this.state.tasks} updateState={this.updateStateHandler} show="all"/>)}/>
            </Switch>
            
            <Footer/>
            </div>
        );
    }
}

export default App;