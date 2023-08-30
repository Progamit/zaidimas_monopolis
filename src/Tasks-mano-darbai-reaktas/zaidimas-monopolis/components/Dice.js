import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {updatePlayerPosition} from "../features/player";

const dices = [
    "https://static.thenounproject.com/png/2381776-200.png",
    "https://static.thenounproject.com/png/1194695-200.png",
    "https://static.thenounproject.com/png/1194703-200.png",
    "https://static.thenounproject.com/png/1194696-200.png",
    "https://static.thenounproject.com/png/4953085-200.png",
    "https://static.thenounproject.com/png/5396174-200.png",
    "https://static.thenounproject.com/png/1194706-200.png"
]
const Dice = () => {

    const [dice, setDice] = useState(dices[0])

    const dispatch = useDispatch()

    function rollDice(){
        const randomNumber = Math.floor(Math.random() * 6) + 1
        setDice(dices[randomNumber])
        dispatch(updatePlayerPosition(randomNumber))
    }

    return (
        <div className="dice">
            <img src={dice} alt=""/>
            <div className="diceBtn" onClick={rollDice}>ROLL DICE</div>
        </div>
    );
};

export default Dice;