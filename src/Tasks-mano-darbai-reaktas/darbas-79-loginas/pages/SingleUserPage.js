import React from 'react';
import {useParams} from "react-router-dom";

const SingleUserPage = ({users}) => {

    const {username} = useParams()

    const user = users.find(x => x.username === username)

    return (
        <div className="d-flex">
            <div className="grow1">
                <img className="userImage" src={user.image} alt=""/>
            </div>
            <div className="grow1">
                <h1>{user.username}</h1>
            </div>
        </div>
    );
};

export default SingleUserPage;
