import React from 'react';
import {useParams, useNavigate} from "react-router-dom";

const ColorPage = () => {

    const nav = useNavigate()

    function changeRoute() {
        nav("/products")
    }

    const {color} = useParams()

    return (
        <div style={{backgroundColor: color}}>
            <h1>THIS IS COLOR PAGE</h1>
            <h1>Color page: {color}</h1>

            <button onClick={changeRoute}>ChangeRoute</button>
        </div>
    );
};

export default ColorPage;