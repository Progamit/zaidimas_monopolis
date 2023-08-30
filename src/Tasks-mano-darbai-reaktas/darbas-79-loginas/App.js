import './App.css';
import Toolbar from "./components/Toolbar.js";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import UsersListPage from "./pages/UsersListPage.js";
import SingleUserPage from "./pages/SingleUserPage.js";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";

function App() {

    const [users, setUsers] = useState([])
    const [myUser, setMyUser] = useState(null)

    function register(user) {
        const foundUser = users.find(x => x.username === user.username)
        if(foundUser) return false
        setUsers([...users, user])
        return true
    }

    function login(user) {

        const foundUser = users.find(x => x.username === user.username && x.password === user.password)

        console.log(foundUser)
        if(foundUser) {
            console.log('user exists')
            setMyUser(foundUser)
            return true
        }

        return false

    }

    function logout() {
        setMyUser(null)
    }

    return (
        <div>
            <BrowserRouter>

                <Toolbar user={myUser} logout={logout}/>

                <Routes>
                    <Route path="/" element={<LoginPage login={login}/>}/>
                    <Route path="/register" element={<RegisterPage register={register}/>}/>
                    <Route path="/allUsers" element={<UsersListPage users={users} />}/>
                    <Route path="/user/:username" element={<SingleUserPage users={users}/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
