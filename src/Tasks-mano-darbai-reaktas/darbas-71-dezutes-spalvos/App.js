import './App.css';
import {useState} from "react";
import Box from "./Box.js";
const colors = [
    "red",
    "blue",
    "pink",
    "yellow"
]

function App() {

    const [trigger, setTrigger] = useState(true)
    const [box1, setBox1] = useState([])
    const [box2, setBox2] = useState([])

    function addBox(color) {

        if(trigger) {
            if([...box1, color].length === 11) return
            setBox1([...box1, color])

        } else {

            if([...box2, color].length === 11) return
            setBox2([...box2, color])
        }
    }

    return (
        <div className="container">


            <div className="d-flex gap10">
                <div>
                    <div className="d-flex j-center check">
                        <input type="checkbox" onClick={() => setTrigger(!trigger)} checked={trigger}/>
                    </div>

                    <Box data={box1}/>
                </div>

                <div>
                    <div className="d-flex j-center check">
                        <input type="checkbox" onClick={() => setTrigger(!trigger)} checked={!trigger}/>
                    </div>

                    <Box data={box2}/>
                </div>
            </div>


            <div className="boxes d-flex gap10 p-2">
                {colors.map((x, i) => <div onClick={() => addBox(x)} style={{backgroundColor: x}} key={i}></div>)}
            </div>



        </div>
    );
}

export default App;

