
import { createSlice } from '@reduxjs/toolkit';
export const sliceLocation = createSlice({
    name : "location",
    initialState : {
        lang : "",
        lat : "",
        name : "Ho Chi Minh city",
        timezone: 'Asia/Singapore'
    },
    reducers : {
        update: (state, action) => {
            //console.log(action.payload);
            state = {...state,...action.payload};
        }
    }
});