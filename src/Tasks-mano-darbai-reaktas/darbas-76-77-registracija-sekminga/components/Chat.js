import React, {useEffect, useState} from 'react';
import ChatTop from "./ChatTop.js";
import ChatBottom from "./ChatBottom.js";
import UsersListInChat from "./UsersListInChat.js";

const Chat = ({setShow, users, messages: conversations, setMessages, me}) => {
    const [error, setError] = useState("")
    const [chatWith, setChatWith] = useState("")

    const [chatData, setChatData] = useState([])

    function send(msg) {
        setError("")
        if(msg.message.length < 3) return setError("Band message")

        const foundConversation = conversations.find(x => x.participants.includes(me.username)
            && x.participants.includes(chatWith))

        if(foundConversation) {
            const conversationIndex = conversations.findIndex(x => x.id === foundConversation.id)

            const convos = [...conversations]
            convos[conversationIndex].messages.push(msg)
            setMessages(convos)
        } else {
            const conversation = {
                id: String(Math.random()),
                participants: [me.username, chatWith],
                messages: [
                    msg
                ]
            }

            setMessages([...conversations, conversation])

            setChatData(conversation.messages)
        }


        console.log(foundConversation)
    }

    useEffect(() => {

        const foundConversation = conversations.find(x => x.participants.includes(me.username)
            && x.participants.includes(chatWith))

        if(foundConversation) {
            setChatData(foundConversation.messages)
        } else {
            setChatData([])
        }


    }, [chatWith])

    return (
        <div className="p50 d-flex flex-column">

            <button onClick={() => setShow(2)}>GO TO LOGIN</button>
            <div className='d-flex'>
                <div className="grow1">
                    <UsersListInChat me={me} setWith={setChatWith} users={users}/>
                </div>
                <div className="chat d-flex flex-column">
                    <ChatTop me={me} chatWith={chatWith} messages={chatData}/>
                    {error && <div>{error}</div>}
                    <ChatBottom me={me} username={chatWith} send={send}/>
                </div>
            </div>



        </div>
    );
};

export default Chat;