import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    randomIndex: null,
    liveGame: false
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        startGame: (state) => {
            state.liveGame = true;
        },
        endGame: (state) => {
            state.liveGame = false
        },
        setRandomIndex: (state, action) => {
            state.randomIndex = action.payload;
        }
    }
});

export const randomIndexSelector = (state) => {
    return state.grid.randomIndex;
}

export const liveGameSelector = (state) => {
    return state.grid.liveGame;
}

export const {startGame, endGame, setRandomIndex} = gridSlice.actions;

export const gridReducer = gridSlice.reducer; 