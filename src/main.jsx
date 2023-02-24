import { combineReducers, configureStore, createAsyncThunk, createSlice, createStore } from '@reduxjs/toolkit'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './assets/css/index.css'
import { sliceHourly } from './slice/sliceHourly'
import { sliceLocation } from './slice/sliceLocation'
import { sliceWeekly } from './slice/sliceWeekly'

const rootReducer = combineReducers({
    hourly: sliceHourly.reducer,
    weekly : sliceWeekly.reducer,
    location: sliceLocation.reducer,
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
        <App />
    </Provider>
)