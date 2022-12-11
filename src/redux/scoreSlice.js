import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    score: 0, 
    completed: false,
    livesLeft: 5
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
            state.livesLeft = 5
        },
        completedGame: (state) => {
            state.completed = true;
        },
        loseALife: (state) => {
          state.livesLeft -= 1 
        }
    }
});

export const scoreSelector = (state) => {
    return state.score.score;
}

export const livesSelector = (state) => {
    return state.score.livesLeft;
}

export const completedSelector = (state) => {
    return state.score.completed;
}

export const {increaseScore, resetScore, completedGame, loseALife} = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;