
import { createSlice } from '@reduxjs/toolkit';
export const sliceLocation = createSlice({
    name : "location",
    initialState : {
        lang : "",
        lat : "",
        name : "Ho Chi Minh city"
    },
    reducers : {
        update: (state, action) => {
            state.name = action.payload
        }
    }
});