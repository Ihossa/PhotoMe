import {UnAuthCtrl} from "../../api/controller/unAuth/unAuth";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const getPhotographerUnAuth = createAsyncThunk(
    'unAuth/fetchPhotographer',
    async (_, thunkAPI) => {
        try {
            const resp = await UnAuthCtrl.getPhotographer()
            return resp.data
        }
        catch (e){
            return thunkAPI.rejectWithValue('Not upload photographer')
        }
    }
)

