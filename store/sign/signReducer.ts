import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../api/dto/photogapher";
import {registration, login} from "./actions";

export const signUser = createSlice({
    name: 'signUser',
    initialState: {
        user: {} as IUser,
        isLoading: false,
        error: '',
    },
    reducers: {
        clearErrors: (state) => {
            state.error = '';
        }
    },
    extraReducers: {
        [registration.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = ''
            state.user = action.payload
        },

        [registration.pending.type]: (state) => {
            state.isLoading = true;
            state.error = ''
        },

        [registration.rejected.type]: (state, err) => {
            state.isLoading = false;
            state.error = err.payload
        },

        [login.fulfilled.type]: (state, action) => {
            state.isLoading = false;
            state.error = ''
            state.user = action.payload
        },

        [login.pending.type]: (state) => {
            state.isLoading = true;
            state.error = ''
        },

        [login.rejected.type]: (state, err) => {
            state.isLoading = false;
            state.error = err.type
        },
    }
})

export default signUser.reducer
