import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";


const RegisterPage = ({register}) => {

    const nav = useNavigate()

    const [err, setErr] = useState("")

    const usernameRef = useRef()
    const imageRef = useRef()
    const passwordOneRef = useRef()
    const passwordTwoRef = useRef()

    function auth() {
        setErr("")
        const user = {
            username: usernameRef.current.value,
            image: imageRef.current.value,
            password: passwordOneRef.current.value,
        }

        if(!user.username) return setErr("username can't be empty")
        if(!user.image) return setErr("image can't be empty")
        if(!user.password) return setErr("password can't be empty")
        if(user.password !== passwordTwoRef.current.value) return setErr("password shild match")

        ///

        const success = register(user)
        if(success) return nav("/")
    }

    return (
        <div className="d-flex flex-column">
            <input type="text" ref={usernameRef} placeholder="username"/>
            <input type="text" ref={imageRef} placeholder="image"/>
            <input type="text" ref={passwordOneRef} placeholder="password one"/>
            <input type="text" ref={passwordTwoRef} placeholder="password two"/>
            <p>{err}</p>
            <button onClick={auth}>Register</button>
        </div>
    );
};

export default RegisterPage;
