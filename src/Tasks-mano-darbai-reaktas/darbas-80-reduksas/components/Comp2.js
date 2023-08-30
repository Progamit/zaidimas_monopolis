import React from 'react';
import {useDispatch} from "react-redux";
import {updateColor} from "../features/colors.js";


const Comp2 = () => {


    const dispatch = useDispatch()

    function setColor(color) {
        dispatch(updateColor(color))
    }

    return (
        <div className="colorBox colors d-flex a-center j-center">
            <div onClick={()=> setColor("pink")} style={{backgroundColor: "pink"}}></div>
            <div onClick={()=> setColor("orange")}  style={{backgroundColor: "orange"}}></div>
            <div onClick={()=> setColor("aqua")}  style={{backgroundColor: "aqua"}}></div>
        </div>
    );
};

export default Comp2;
