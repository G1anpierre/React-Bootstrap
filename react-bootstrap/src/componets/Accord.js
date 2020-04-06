import React from "react";

import './Accordion.scss';


function Accord(props) {
    return (
        <div className="accordion__section">
            
            <p className="accordion__title">{props.title}</p>

            <h1>Questions and Answers</h1>

        </div>
    )
}


export default Accord;