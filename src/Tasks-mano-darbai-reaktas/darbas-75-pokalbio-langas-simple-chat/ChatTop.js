import React from 'react';
import SingleMessage from "./SingleMessage";

const ChatTop = ({messages}) => {

    return (
        <div className="grow1 chatTop">
            {messages.map((x,i) => <SingleMessage message={x} key={i}/>)}
        </div>
    );
};

export default ChatTop;