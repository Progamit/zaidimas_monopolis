import React, {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = ({login}) => {
    const nav = useNavigate()
    const [err, setErr] = useState("")

    const usernameRef = useRef()
    const passwordOneRef = useRef()

    function auth() {
        setErr("")
        const user = {
            username: usernameRef.current.value,
            password: passwordOneRef.current.value,
        }

        if(!user.username) return setErr("username can't be empty")
        if(!user.password) return setErr("password can't be empty")


        const success = login(user)

        success ? nav("/allUsers") : null

    }

    return (
        <div className="d-flex flex-column">
            <input type="text" ref={usernameRef} placeholder="username"/>
            <input type="text" ref={passwordOneRef} placeholder="password one"/>
            <p>{err}</p>
            <button onClick={auth}>Login</button>
        </div>
    );
};

export default LoginPage;

