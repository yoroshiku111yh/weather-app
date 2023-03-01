
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrlWeatherDetailWeekly, IS_LOCAL } from './../variable';
import { dummyDataWeekly } from './../dummy-data-weekly';

const testAPI = apiUrlWeatherDetailWeekly();

export const getWeeklyWeather = createAsyncThunk(
    'weekly/get',
    async (data, { rejectWithValue }) => {
        const response = await fetch(
            testAPI,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(data)
            }
        );
        const jsonData = await response.json();
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(jsonData);
        }
        return jsonData;
    }
)

export const sliceWeekly = createSlice({
    name: "weekly",
    initialState: {
        data: {},
        isLoading: false,
        errorMessage: null,
        isError: false,
    },
    reducers : {
        updateDummy : ( state, action ) => {
            return state = {...state, ...{data : action.payload}};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWeeklyWeather.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getWeeklyWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(getWeeklyWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.error.message;
            // if(IS_LOCAL){
            //     state.data = dummyDataWeekly;
            // }
        });
    }
})