import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBoughtCard} from "../features/player";

const Card = ({card}) => {

    const player = useSelector(state => state.player)
    const alreadyOwned = player.boughtCards.find(boughtCard => boughtCard.id === card.id)
    const dispatch = useDispatch()

    const match = player.playerPosition === card.id
    const enoughMoney = player.playerMoney >= card.price

    function buyCard(){
        dispatch(addBoughtCard(card))
    }

    return (
        <div className="card" id={`card${card.id}`} style={{gridArea: `card${card.id}`}}>
            <div className="cardContent" style={{background: card.color}}>
                <div>
                    {match && <img src={player.playerPiece.image} alt=""/>}
                </div>

                <h1>{card.name}</h1>
            </div>

            {card.id !== 1 &&
                <div
                    className=
                        {`buyBtn
                        ${enoughMoney && match && "available"}
                        ${match && !enoughMoney && "notAvailable"}
                        ${alreadyOwned && "owned"}`}
                    onClick={buyCard}
                >{alreadyOwned ? "OWNED" : `${card.price}$`}</div>}
        </div>
    );
};

export default Card;