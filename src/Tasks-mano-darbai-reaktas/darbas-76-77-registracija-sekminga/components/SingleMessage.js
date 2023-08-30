import React from 'react';

const SingleMessage = ({message, me}) => {
    const messageColor = message.from === me.username ? "#EBFFEEFF" : "#ebeeff"

    return (
        <div className="msg" style={{backgroundColor: messageColor}}>
            <b>{message.from}</b>
            {/*<b>{message.to}</b>*/}
            <p>{message.message}</p>
            <small>{message.time}</small>
        </div>
    );
};

export default SingleMessage;