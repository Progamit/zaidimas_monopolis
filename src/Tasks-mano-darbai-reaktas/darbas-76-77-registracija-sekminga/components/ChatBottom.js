import {useRef} from 'react';

const ChatBottom = ({send, username, me}) => {

    const messageRef = useRef()

    function sendMessage() {
        const data = {
            to: username,
            from: me.username,
            message: messageRef.current.value,
            time: new Date(Date.now()).toDateString()
        }
        send(data)
    }

    return (
        <div>
            <input type="text" ref={messageRef} placeholder="message"/>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
};

export default ChatBottom;

