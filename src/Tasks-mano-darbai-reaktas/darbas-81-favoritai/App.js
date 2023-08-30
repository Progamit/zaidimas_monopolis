import './App.css';
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Favoritespage from "./pages/Favoritespage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Toolbar/>

                <Routes>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/favorites" element={<Favoritespage/>}/>

                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;