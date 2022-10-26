import React from "react";
import { useState } from "react";

import "./style.css";


function Card(props) {
    const [value, setValue] = useState(1);

    return (
        <div class="card">
            <h2>{props.title}</h2>
            <img src={props.img}/>
            <p>{props.description}</p>
            <button onClick={() => setValue(value +1)}>Like</button>
            <h3>{value}</h3>
        </div>
    );
}

export default Card;