import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Toolbar = ({user, logout}) => {
    const nav = useNavigate()

    function signOut() {
        logout()
        nav('/')
    }

    return (
        <div className="toolbar">
            {user ? <div className="d-flex space-btw">
                <b>{user.username}</b>
                <button onClick={signOut}>Logout</button>
            </div> :  <div className="d-flex">
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>
            </div> }
        </div>
    );
};

export default Toolbar;
