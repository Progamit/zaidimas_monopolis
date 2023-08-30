import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import GameStartPage from "./pages/GameStartPage.js";
import GameBoardPage from "./pages/GameBoardPage.js";

function App() {

    const dispatch = useDispatch()


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<GameStartPage/>}
                    />

                    <Route
                        path="/gameboard"
                        element={<GameBoardPage/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;