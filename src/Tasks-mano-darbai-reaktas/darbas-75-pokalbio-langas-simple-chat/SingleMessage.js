import React from 'react';

const SingleMessage = ({message}) => {
    return (
        <div className="msg">
            <b>{message.name}</b>
            <p>{message.message}</p>
            <small>{message.time}</small>
        </div>
    );
};

export default SingleMessage
