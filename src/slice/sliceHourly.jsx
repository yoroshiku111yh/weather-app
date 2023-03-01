
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dummyDataHourly } from '../dummy-data';
import { apiUrlWeatherDetailToday, IS_LOCAL } from './../variable';

const testAPI = apiUrlWeatherDetailToday();

export const getHourlyWeather = createAsyncThunk(
    'hourly/get',
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

export const sliceHourly = createSlice({
    name: "hourly",
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
        builder.addCase(getHourlyWeather.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(getHourlyWeather.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(getHourlyWeather.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.error.message;
            // if(IS_LOCAL){
            //     state.data = dummyDataHourly;
            // }
        });
    }
})