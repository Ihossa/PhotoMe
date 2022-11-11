import {createSlice} from "@reduxjs/toolkit";
import {getPhotographerUnAuth} from "./actions";

const unAuth = createSlice({
    name: 'unAuth',
    initialState: {
        photographer: []
    },
    reducers: {},
    extraReducers: {
        [getPhotographerUnAuth.fulfilled.type]: (state, action) => {
            state.photographer = action.payload
        }
    }
})

export default unAuth.reducer