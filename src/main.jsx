import { combineReducers, configureStore, createAsyncThunk, createSlice, createStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './assets/css/index.css'
import { sliceHourly } from './slice/sliceHourly'

// export const getUsers = createAsyncThunk(
//     'user/getUsers',
//     async (data, { rejectWithValue }) => {
//         const response = await fetch(
//             'https://jsonplaceholder.typicode.com/users',
//             {
//                 method: "GET",
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data)
//             }
//         );
//         const jsonData = await response.json();
//         if (response.status < 200 || response.status >= 300) {
//             return rejectWithValue(jsonData);
//         }
//         return jsonData;
//     }
// )

// const counterSlice = createSlice({
//     name: "counter",
//     initialState: 0,
//     reducers: {
//         increment: (state) => state + 1,
//         decrement: (state) => state - 1
//     },
// });

// const userAsyncSlice = createSlice({
//     name: "user",
//     initialState: {
//         isLoading: false,
//         data: [],
//     },
//     extraReducers: (builder) => {
//         builder.addCase(getUsers.pending, (state) => {
//             state.isLoading = true;
//         });
//         builder.addCase(getUsers.fulfilled, (state, action) => {
//             state.isLoading = false;
//             state.data = action.payload
//         });
//         builder.addCase(getUsers.rejected, (state) => {
//             state.isLoading = false;
//         });
//     }
// })

//export const { increment, decrement } = counterSlice.actions;

const rootReducer = combineReducers({
    hourly : sliceHourly.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)