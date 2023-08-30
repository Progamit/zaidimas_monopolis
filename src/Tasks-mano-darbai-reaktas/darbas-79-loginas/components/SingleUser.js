import React from 'react';
import {useNavigate} from "react-router-dom";

const SingleUser = ({user}) => {

    const nav = useNavigate()

    return (
        <div className="user" onClick={() => nav("/user/"+user.username)}>
            <img src={user.image} alt=""/>
            <b>{user.username}</b>
        </div>
    );
};

export default SingleUser;

