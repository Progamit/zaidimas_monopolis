import './App.css';
import {useState, useEffect, useRef} from "react";
import ChatTop from "./ChatTop.js";
import ChatBottom from "./ChatBottom.js";

function App() {

    const [messages, setMessages] = useState([])
    const [error, setError] = useState("asdas")

    function send(data) {
        console.log(data)
        setError("")
        if(data.name.length < 3) return setError("Band name")
        if(data.message.length < 3) return setError("Band message")

        setMessages([...messages, data])
    }

    return (
        <div className="p50 d-flex flex-column">


            <div className="chat d-flex flex-column">
                <ChatTop messages={messages}/>
                {error && <div>{error}</div>}
                <ChatBottom send={send}/>
            </div>
        </div>
    );
}

export default App;
