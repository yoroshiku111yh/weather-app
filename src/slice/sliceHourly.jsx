
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiUrlWeatherDetailToday } from './../variable';

const testAPI = apiUrlWeatherDetailToday();

export const getHourlyWeather = createAsyncThunk(
    'hourly/get',
    async (data, { rejectWithValue }) => {
        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=10.82&longitude=106.63&hourly=temperature_2m,weathercode',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(data)
            }
        );
        const jsonData = await response.json();
        console.log(jsonData);
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
        isError: false
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
            console.log(action);
        });
    }
})