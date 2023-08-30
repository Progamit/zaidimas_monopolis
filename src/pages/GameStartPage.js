import React, {useState} from 'react';
import Piece from "../components/Piece";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import logo from "../assets/logoMONOPOLIS.png"


const pieces = [
    {
        name: "Senior",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gCsYI4OX7VeiXa7_cYUhHUnZKVLKc75T319qLxMe6eMZsCI4kGnzMnlL_9GqVaWCFWw&usqp=CAU"
    },
    {
        name: "Young",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJh6A7mQF4AWG4Va4HifkRS5fYKpiHPh5Ghbgy5I9yMj58Bgu9XASUOEGgS8qZGFmiIs&usqp=CAU"
    },
    {
        name: "Hat",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5zhYOC9F4Ly7qQekKk6plBoPG0F0eAWipQ&usqp=CAU"
    },
    {
        name: "Stranger",
        image: "data:image/jpeg;base64,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p7Rp4em1WswRFFyT9AOJPADMwMDtfWCYOuzGw3CL6Zt3R8zIip1qbD40PmJj9uu2LY6oFTeShTJ3Bndz99uR5DO3jOWFl0/A69YaOlvTrRMRHPLpsUoAJFvKS52G2ImHw6uB/qVURqjXJubEgC+QA3jpznztUqHQEi/I2n0p2M2j+0YLD1crmmoa2gZO646Zqcoet7qE7FYrEce7a4zDLURkdQysLEHMESB0pgO63JCuygdFYgSfXYAEnIAXJ6DWfMO19pNXxFWrfuvUdwBku6zErl4W8YeNDd/hptzHPLqalVANVFuokg+zDHK9CogIO5UNrEfC4Df+W9IOZgRbl04zN2Btqpgq61qWZW4ZTfdZDqpI9QdQYdNzqM7GPwTXj18305E0XZntPQxyb9Fu8LbyNk6m3EcRyYZGb2GWREQEREBERAREQEREBERAREQEREBERASIfads7G18V3KFSpRRFCbilhci7mwv3r5aaASXogfODdm8Tu//AFMQG6U6n/rLSdkse/w4Ov8AxJufN7CfScQnmUA4L2W7QqEb606Q/fcEj+FA31kx9kNifsWEp4csGKbxZgCAWZixIB8ZvIhC1WphlZTowIPgRaQdjPZLjaeVN6NVRp3ijfysLf1SdogfOFXsZj0NmwlU9UCv/wCBMrT7NYm3ewmJvyNOp/6z6NiE8vnvYWxdo0sRTq0cLWVkcZsrIu6T3gxa11IvcT6FiIQREQEREBERAREQEREBERAREQEREBERAREQKRKxAREQERECkSsQEREBERAREQEREBERAREQP//Z"
    }
]

const GameStartPage = () => {

    const [error, setError] = useState("")

    const playerPiece = useSelector(state => state.player.playerPiece)
    const nav = useNavigate()

    function startGame() {
        playerPiece ? nav("/gameboard") : setError("Please select your game piece")
    }

    return (
        <div className="gameStartPage">
            <img src={logo} alt=""/>
            <h1>MONOPOLY</h1>
            <div className="choicesContainer">
                {pieces.map((piece, index) =>
                    <Piece
                        key={index}
                        piece={piece}
                    />)}
            </div>

            <button className="startGameBtn" onClick={startGame}>START GAME</button>
            {error && <p className="errorMessage">{error}</p>}


        </div>
    );
};

export default GameStartPage;
