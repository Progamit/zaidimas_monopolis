import React, {useRef, useState} from 'react';

const Login = ({login, setShow}) => {
    const [err, setErr] = useState("")

    const nameRef = useRef()
    const passOneRef = useRef()

    function createUser() {
        const user = {
            username: nameRef.current.value,
            password: passOneRef.current.value
        }

        if(user.username.length < 4 || user.username.length > 20) return setErr("Bad username")
        if(user.password.length < 4 || user.password.length > 20) return setErr("Bad pass length")

        login(user)
    }

    return (
        <div className="d-flex flex-column">
            <button onClick={() => setShow(1)}> TO REGISTER</button>
            <input type="text" ref={nameRef} placeholder="username"/>
            <input type="text" ref={passOneRef} placeholder="pass 1"/>

            {err && <p>{err}</p>}


            <button onClick={createUser}>LOGIN</button>
        </div>
    );
};

export default Login;