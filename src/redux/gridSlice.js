import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    randomIndex: null,
    liveGame: false,
    showingBug: true
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
        },
        setShowingBug: (state, action) => {
            state.showingBug = action.payload;
        }
    }
});

export const randomIndexSelector = (state) => {
    return state.grid.randomIndex;
}

export const liveGameSelector = (state) => {
    return state.grid.liveGame;
}

export const showingBugSelector = (state) => {
    return state.grid.showingBug;
}

export const {startGame, endGame, setRandomIndex, setShowingBug} = gridSlice.actions;

export const gridReducer = gridSlice.reducer; 