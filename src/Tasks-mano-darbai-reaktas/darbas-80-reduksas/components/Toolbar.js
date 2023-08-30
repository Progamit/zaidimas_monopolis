import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {changeCity} from "../features/user";

const Toolbar = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const update = () => {
        dispatch(changeCity())
    }


    return (
        <div className="toolbar">
            <h3>{user.name}</h3>
            <h4>{user.city}</h4>
            <button onClick={update}>update city</button>
        </div>
    );
};

export default Toolbar;
