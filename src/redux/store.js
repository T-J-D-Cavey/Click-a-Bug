import {configureStore} from '@reduxjs/toolkit';
import {gridReducer} from './gridSlice';

export const store = configureStore({
    reducer: {
        grid: gridReducer
    }
})

