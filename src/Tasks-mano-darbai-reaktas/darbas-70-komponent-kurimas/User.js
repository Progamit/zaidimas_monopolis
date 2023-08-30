import React, {useState} from 'react';
const User = ({user}) => {

    return (
        <div className="userCard">
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <p>{user.company.name}</p>
        </div>
    );
};

export default User;

