import React from 'react';
import {useSelector} from "react-redux";

const Comp1 = () => {

    const data = useSelector(state => state.colors)


    return (
        <div className="colorBox d-flex j-center a-center" style={{backgroundColor: data.mainColor}}>
            <h1>{data.mainText}</h1>
        </div>
    );
};

export default Comp1;
