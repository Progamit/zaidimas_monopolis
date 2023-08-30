import React from 'react';
import {useDispatch} from "react-redux";
import {removeBoughtCard} from "../features/player";

const BoughtCard = ({card}) => {

    const dispatch = useDispatch()

    function sellCard(){
        dispatch(removeBoughtCard(card))
    }

    return (
        <>
            {card.id !== 1 &&
                <div className="boughtCard" style={{background: card.color}}>
                    <div className="boughtCardContent">
                        <div>
                            <h4><span>{card.name} </span></h4>
                        </div>
                        <div>
                            <h4>{card.price / 2}$</h4>
                        </div>
                    </div>
                    <div className="sellBtn" onClick={sellCard}>SELL</div>
                </div>
            }
        </>
    );
};

export default BoughtCard;