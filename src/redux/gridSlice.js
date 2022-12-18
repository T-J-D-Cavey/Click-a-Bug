import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    randomIndex: null,
    liveGame: false,
    showingBug: true,
    randomIndexForBugItem: 0
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
        },
        setRandomIndexForBugItem: (state, action) => {
            state.randomIndexForBugItem = action.payload;
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

export const randomIndexForBugItemSelector = (state) => {
    return state.grid.randomIndexForBugItem;
}

export const {startGame, endGame, setRandomIndex, setShowingBug, setRandomIndexForBugItem} = gridSlice.actions;

export const gridReducer = gridSlice.reducer; 