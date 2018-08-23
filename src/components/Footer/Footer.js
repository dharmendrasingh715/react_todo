import React from "react";
import Classes from "../../containers/App.scss";

const Footer = (props) => {
  
    return (
        
            <div className={Classes.footer}>
                <span>
                    <a href="#">All</a>
                </span>
                <span>
                    <a href="#">Completed</a>
                </span>
                <span>
                    <a href="#">Clear Completed</a>
                </span>
            </div>
    )
}

export default Footer;