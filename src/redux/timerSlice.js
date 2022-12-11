import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    time: 300
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        decrementTimer: (state, action) => {
            state.time = action.payload;
        },
        endTimer: (state) => {
            state.time = 0;
        }
    }

});

export const timeSelector = (state) => {
    return state.timer.time;
}

export const {decrementTimer, endTimer} = timerSlice.actions;

export const timerReducer = timerSlice.reducer;




// When liveGame is true timer should start, when the timer reaches zero or the user changes URL, liveGame should be false 