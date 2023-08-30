import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "colors",
    initialState: {
        mainColor: "white",
        mainText: "Empty"
    },
    reducers: {
        updateColor: (state, action) => {
            state.mainColor = action.payload
        },
        updateText: (state, action) => {
            state.mainText = action.payload
        },
    }
})

export const {updateColor, updateText} = userSlice.actions

export default userSlice.reducer;

