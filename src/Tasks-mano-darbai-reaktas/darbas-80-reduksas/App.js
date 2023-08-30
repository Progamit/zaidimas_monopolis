import './App.css';
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect, useState} from "react";

import Comp1 from "./components/Comp1";
import Comp3 from "./components/Comp3";
import Comp2 from "./components/Comp2";


function App() {
    return (
        <div>
            <div className="d-flex j-center">
                <Comp1/>
            </div>
            <div className="d-flex space-btw">
                <Comp2/>
                <Comp3/>
            </div>
        </div>
    );
}

export default App;