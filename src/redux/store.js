import {configureStore} from '@reduxjs/toolkit';
import {gridReducer} from './gridSlice';
import {scoreReducer} from './scoreSlice';

export const store = configureStore({
    reducer: {
        grid: gridReducer,
        score: scoreReducer,
    }
})

