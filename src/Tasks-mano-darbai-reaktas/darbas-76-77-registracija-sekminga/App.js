import './App.css';
import {useState, useEffect, useRef} from "react";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Chat from "./components/Chat.js";

function App() {

    const [messages, setMessages] = useState([])
    const [show, setShow] = useState(1)
    const [err, setErr] = useState("")
    const [users, setUsers] = useState([])
    const [myUser, setMyUser] = useState(null)

    const loginUser = (user) => {
        setErr("")
        const foundUser = users.find(x => x.username === user.username && x.password === user.password)

        if(!foundUser) return  setErr("Bad user credentials")

        setMyUser(user)
        setShow(3)
    }

    const registerUser = (user) => {
        setErr("")
        const foundUser = users.find(x => x.username === user.username)

        if(foundUser) {
            return setErr("Username occupied")
        }

        setUsers([...users, user])

        setShow(2)
    }

    return (
        <div className="p50 d-flex flex-column">
            {err && <h1>{err}</h1>}
            {show === 1 && <Register reg={registerUser}/>}
            {show === 2 && <Login setShow={setShow} login={loginUser}/>}
            {show === 3 && <Chat me={myUser} messages={messages} setMessages={setMessages} users={users} setShow={setShow}/>}

        </div>
    );
}

export default App;