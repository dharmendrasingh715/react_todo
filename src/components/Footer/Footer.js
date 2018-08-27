import React from "react";
import Classes from "../../containers/App.scss";
import { Link } from 'react-router-dom'


const Footer = (props) => {
  
    return (
        
            <div className={Classes.footer}>
                <span>
                    {/* <a href="/all">All</a> */}
                    <Link to="/all">All</Link>
                </span>
                <span>
                    {/* <a href="/completed">Completed</a> */}
                    <Link to="/completed">Completed</Link>
                </span>
                <span>
                    <a href="/">Clear Completed</a>
                </span>
            </div>
    )
}

export default Footer;