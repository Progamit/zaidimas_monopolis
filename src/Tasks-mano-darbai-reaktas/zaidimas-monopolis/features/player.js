import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        playerPiece: "",
        playerMoney: 200,
        playerPosition: 1,
        boughtCards: [],
    },
    reducers: {
        updatePiece: (state, action) => {
            state.playerPiece = action.payload
        },
        updatePlayerPosition: (state, action) => {
            state.playerPosition += action.payload

            if (state.playerPosition > 16) {
                state.playerMoney += 150
                state.playerPosition = state.playerPosition - 16
            }
        },
        addBoughtCard: (state, action) => {
            state.playerMoney -= action.payload.price
            state.boughtCards.push(action.payload)
        },
        removeBoughtCard: (state, action) => {
            state.playerMoney += action.payload.price / 2
            state.boughtCards = state.boughtCards.filter(card => card.id !== action.payload.id)
        }
    }
})

export const {updatePiece, updatePlayerPosition, addBoughtCard, removeBoughtCard} = playerSlice.actions

export default playerSlice.reducer;