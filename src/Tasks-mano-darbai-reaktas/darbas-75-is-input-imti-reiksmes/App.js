import './App.css';
import {useState, useEffect, useRef} from "react";

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function App() {
    const [error, setError] = useState("")

    const usernameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()

    function register() {
        setError("")
        const item = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            passwordOne: pass1Ref.current.value,
            passwordTwo: pass2Ref.current.value,
        }

        if(item.username.length > 20 || item.username.length < 4) return setError("Bad username")
        if(!validateEmail(item.email)) return setError("Email not valid")
        if(item.phone.length !== 9) return setError("Phone length bad")
        if(!Number(item.phone)) return setError("Phone has to be numeric characters only")
        if(item.phone[0]+item.phone[1] !== "86") return setError("Phone should start 86")

        if(item.passwordTwo.length > 20 || item.passwordTwo.length < 4) return setError("Password legnth bad")
        if(item.passwordTwo !== item.passwordOne) return setError("Passwords should match")

        let isNumberInPassword = false
        let isUpperLetterInside = false
        for (let i = 0; i < item.passwordOne.length; i++) {
            const num = Number(item.passwordOne[i])
            if(num || 0) {
                isNumberInPassword = true
            }
            if(item.passwordOne[i] === item.passwordOne[i].toUpperCase() && !num) {
                isUpperLetterInside = true
            }
        }
        if(!isNumberInPassword) return setError("Passwords should have number inside")
        if(!isUpperLetterInside) return setError("Passwords should have atleast one upper case letter")

        console.log(item)
    }

    return (
        <div className="p50 d-flex flex-column">

            <input type="text" ref={usernameRef} placeholder="username"/>
            <input type="text" ref={emailRef} placeholder="email"/>
            <input type="number" ref={phoneRef} placeholder="phone"/>
            <input type="text" ref={pass1Ref} placeholder="pass 1"/>
            <input type="text" ref={pass2Ref} placeholder="pass 2"/>

            {error && <div className="err">{error}</div>}

            <button onClick={register}>Register</button>
        </div>
    );
}

export default App;

