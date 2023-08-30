import React, {useState} from 'react';
const User = ({user}) => {

    return (
        <div className="user">
            <h1>{user.id}</h1>
            <p>{user.title}</p>
            <p>{user.body}</p>
            <p>{user.userId}</p>
            <p>{user.tags}</p>
            <p>{user.reactions}</p>

        </div>
    );
};