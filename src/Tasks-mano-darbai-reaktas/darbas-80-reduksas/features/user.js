import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "Andrius",
        age: 0,
        email: "",
        city: "Trakai"
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeCity: (state, action) => {
            state.city = "Vilnius"
        }
    }
})

export const {changeName, changeCity} = userSlice.actions

export default userSlice.reducer;
