import {useRef} from 'react';

const ChatBottom = ({send}) => {

    const nameRef = useRef()
    const messageRef = useRef()

    function sendMessage() {
        const data = {
            name: nameRef.current.value,
            message: messageRef.current.value,
            time: new Date(Date.now()).toDateString()
        }
        send(data)
    }

    return (
        <div>
            <input type="text" ref={nameRef} placeholder="username"/>
            <input type="text" ref={messageRef} placeholder="message"/>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
};

export default ChatBottom;
