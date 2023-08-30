import React from 'react';
import SingleMessage from "./SingleMessage.js";

const ChatTop = ({messages, chatWith, me}) => {

    return (
        <div className="grow1 chatTop">
            <h4>Talking with: {chatWith}</h4>
            {messages.map((x,i) => <SingleMessage me={me} message={x} key={i}/>)}
        </div>
    );
};

export default ChatTop;