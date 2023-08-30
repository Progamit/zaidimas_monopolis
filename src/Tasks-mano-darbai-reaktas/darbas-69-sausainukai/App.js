import './App.css';
import {useState} from "react";

function App() {

    const [points, setPoints] = useState(0)
    const [pointsAdd, setPointsAdd] = useState(1)
    const [bgColor,setBgColor] = useState("white")
    const [cookieImg, setCookieImg] = useState("https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png")
    const [cookieClass, setCookieClass] = useState("")


    function addPoints() {
        setPoints(points + pointsAdd)
    }

    function buyUpgrade(price, upgrade) {

        if(upgrade === 1) {
            if(points >= price) {
                setPoints(points-price)
                setPointsAdd(2)
            }
        }
        if(upgrade === 2) {
            if(points >= price) {
                setPoints(points-price)
                setPointsAdd(3)
            }
        }
        if(upgrade === 3) {
            if(points >= price) {
                setPoints(points-price)
                setBgColor("orange")
            }
        }
        if(upgrade === 4) {
            if(points >= price) {
                setPoints(points-price)
                setCookieImg("https://pngimg.com/d/cookie_PNG13656.png")
            }
        }
        if(upgrade === 5) {
            if(points >= price) {
                setPoints(points-price)
                setCookieClass("spin")
            }
        }

    }

    return (
        <div className="container d-flex" style={{backgroundColor: bgColor}}>

            <div>
                <img onClick={addPoints} className={cookieClass}
                     src={cookieImg} alt=""/>
                <h1>Points: {points}</h1>
            </div>
            <div className="d-flex flex-column">
                <button onClick={() => buyUpgrade(50, 1)}>2 Points per click - 50</button>
                <button onClick={() => buyUpgrade(80, 2)}>3 Points per click - 80</button>
                <button onClick={() => buyUpgrade(30, 3)}>Change bg color - 30</button>
                <button onClick={() => buyUpgrade(40, 4)}>Change cookie image - 40</button>
                <button onClick={() => buyUpgrade(50, 5)}>Make cookie spin - 50</button>
            </div>

        </div>
    );
}

export default App;