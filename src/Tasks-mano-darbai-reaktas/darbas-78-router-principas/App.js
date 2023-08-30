import'./App.css';
import HomePage from "./HomePage.js";
import IndexPage from "./IndexPage.js";
import Toolbar from "./Toolbar.js";
import {useState, useEffect, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Toolbar/>

                <div className= "d-flex">
                    <div className="sidebar">
                        <div>link1</div>
                        <div>link1</div>
                        <div>link1</div>
                        <div>link1</div>
                    </div>
                    {/*<div className="grow1"*/}

                    <Routes>
                        <Route path="/" element={<IndexPage/>}/>
                        <Route path="/home" element={<HomePage/>}/>
                    </Routes>

                </div>


            </BrowserRouter>
        </div>
    );
}

export default App;