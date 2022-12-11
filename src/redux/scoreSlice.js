import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    score: 0, 
    completed: false,
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increaseScore: (state) => {
            state.score = state.score + 10;
        },
        resetScore: (state) => {
            state.score = 0;
            state.completed = false;
        },
        completedGame: (state) => {
            state.completed = true;
        }
    }
});

export const scoreSelector = (state) => {
    return state.score.score;
}

export const completedSelector = (state) => {
    return state.score.completed;
}

export const {increaseScore, resetScore, completedGame} = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;