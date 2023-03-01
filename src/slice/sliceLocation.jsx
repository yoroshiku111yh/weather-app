
import { createSlice } from '@reduxjs/toolkit';
export const sliceLocation = createSlice({
    name : "location",
    initialState : {
        lat: "10.82",
        lang: "106.63",
        name : "Ho Chi Minh city",
        timezone: 'Asia/Singapore'
    },
    reducers : {
        update: (state, action) => {
            return state = {...state,...action.payload};
        }
    }
});