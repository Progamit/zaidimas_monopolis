import {useRef, useState} from 'react';

const Register = ({reg}) => {

    const [err, setErr] = useState("")

    const nameRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()


    function register() {
        setErr("")
        const user = {
            username: nameRef.current.value,
            password: passOneRef.current.value
        }

        if(user.username.length < 4 || user.username.length > 20) return setErr("Bad username")
        if(user.password.length < 4 || user.password.length > 20) return setErr("Bad pass length")
        if(passOneRef.current.value !== passTwoRef.current.value) return setErr("Password should match")


        reg(user)
    }

    return (
        <div className="d-flex flex-column">
            <input type="text" ref={nameRef} placeholder="username"/>
            <input type="text" ref={passOneRef} placeholder="pass 1"/>
            <input type="text" ref={passTwoRef} placeholder="pass 2"/>

            {err && <p>{err}</p>}


            <button onClick={register}>REGISTER</button>
        </div>
    );
};

export default Register;
