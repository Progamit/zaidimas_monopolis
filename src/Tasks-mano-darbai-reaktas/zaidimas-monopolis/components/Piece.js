import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updatePiece} from "../features/player";

const Piece = ({piece}) => {

    const selectedPiece = useSelector(state => state.player.playerPiece)
    const dispatch = useDispatch()

    function selectPiece(newPiece) {
        dispatch(updatePiece(newPiece))
    }

    return (
        <div className="choice" style={{border: `${piece === selectedPiece ? "2px solid yellow" : "1px solid #282828"} ` }} onClick={() => selectPiece(piece)}>
            <img src={piece.image} alt=""/>
        </div>
    );
};

export default Piece;