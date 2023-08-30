import React, {useState} from 'react';

const ColorBox = ({item}) => {
    const [color, setColor] = useState("white")
    const [colorName, setColorName] = useState("")

    function info() {
        setColor(item.hex)
        setColorName(item.name)
    }

    return (
        <div className="box" style={{backgroundColor: color}}>
            <h1>{colorName}</h1>
            <h1>{item.hex}</h1>
            <button onClick={info}>Show Info</button>

            {
                colorName &&
                <div className="d-flex ">
                    {item.families.map((x,i) => <div className="smallBox" style={{backgroundColor: x}} key={i}></div>)}
                </div>
            }
        </div>
    );
};

export default ColorBox;
