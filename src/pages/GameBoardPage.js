import React from 'react';
import Card from "../components/Card";
import {useSelector} from "react-redux";
import BoughtCard from "../components/BoughtCard";
import Dice from "../components/Dice";

let gameCards;


gameCards = [
    {
        "id": 1,
        "name": "START",
        "price": 0,
        "color": "gray",
    },
    {
        id: 2,
        name: "BASEINAS",
        price: 10,
        color: "#FA8072",
    },
    {
        id: 3,
        name: "GARVEŽYS",
        price: 30,
        color: "gray",
    },
    {
        id: 4,
        name: "LĖKTUVAS",
        price: 80,
        color: "#chocolate",
    },
    {
        id: 5,
        name: "AUKSO SKYNIA",
        price: 120,
        color: "#gray",
    },
    {
        id: 6,
        name: "STOVĖJIMO AIKŠTELĖ",
        price: 200,
        color: "olive",
    },
    {
        id: 7,
        name: "PILIS",
        price: 220,
        color: "gray",
    },
    {
        id: 8,
        name: "PASTATAS",
        price: 160,
        color: "#FA8072",
    },
    {
        id: 9,
        name: "KAUNO GATVĖ",
        price: 240,
        color: "#chocolate",
    },
    {
        id: 10,
        name: "AUTOMOBILIS",
        price: 100,
        color: "#FA8072",
    },
    {
        id: 11,
        name: "PILIES GATVĖ",
        price: 180,
        color: "gray",
    },
    {
        id: 12,
        name: "AUTOBUSAS",
        price: 100,
        color: "olive",
    },
    {
        id: 13,
        name: "VOLUNGIŲ GATVĖ",
        price: 190,
        color: "#FA8072",
    },
    {
        id: 14,
        name: "LAISVĖS ALĖJA",
        price: 200,
        color: "gray",
    },
    {
        id: 15,
        name: "KAUNO SENAMIESTIS",
        price: 230,
        color: "peru",
    },
    {
        id: 16,
        name: "SKLYPAS UŽMIESTYJE",
        price: 210,
        color: "#FA8072",
    }
];
const GameBoardPage = () => {

    const boughtCards = useSelector(state => state.player.boughtCards)
    const playerMoney = useSelector(state => state.player.playerMoney)

    return (
        <div className="gameBoardContainer">
            <div className="gameBoard">
                {gameCards.map(card =>
                    <Card
                        card={card}
                        key={card.id}
                    />)}
                <Dice/>
            </div>

            <div className="boughtCardsContainer">
                <div className="playerMoney">
                    <img src="https://cdn-icons-png.flaticon.com/512/9400/9400233.png" alt=""/>
                    <h2>Balance: <span>{playerMoney}$</span></h2>
                </div>

                {boughtCards.map(card =>
                    <BoughtCard
                        card={card}
                        key={card.id}
                    />)}
            </div>

        </div>
    );
};

export default GameBoardPage;