
import React from "react";


import "./Heading.css";

const Heading = (props) =>{
    
    return (

        <div className="heading">
            <h1>{props.title}</h1>
            <button>View All</button>
        </div>

    )

}

export default Heading;