import {configureStore} from '@reduxjs/toolkit';
import {gridReducer} from './gridSlice';
import {scoreReducer} from './scoreSlice';
import {timerReducer} from './timerSlice';

export const store = configureStore({
    reducer: {
        grid: gridReducer,
        score: scoreReducer,
        timer: timerReducer
    }
})

