import React from "react";
import Classes from "../../containers/App.scss";
import { Link } from 'react-router-dom'


const Footer = (props) => {
    console.log(props);

    return (

        <div className={Classes.footer}>
            <span>
                <Link to="/all">All</Link>
            </span>
            <span>
                <Link to="/completed">Completed</Link>
            </span>
            <span>

                <button onClick={() => props.clearCompleted()}>clear</button>
            </span>
        </div>
    )
}

export default Footer;