import './App.css';
import HomePage from "./HomePage.js";
import IndexPage from "./IndexPage.js";
import Toolbar from "./Toolbar.js";
import ProductsPage from "./ProductsPage.js";
import SingleProductPage from "./SingleProductPage.js";
import ColorPage from "./ColorPage.js";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";

function App() {


    useEffect(() => {
        console.log('FIRST TIME LOADED')
    }, [])

    return (
        <div>
            <BrowserRouter>

                <Toolbar/>

                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/product/:id" element={<SingleProductPage/>}/>



                </Routes>


            </BrowserRouter>
        </div>
    );
}

export default App;