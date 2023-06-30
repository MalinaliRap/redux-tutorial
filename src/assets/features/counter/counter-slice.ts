import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1; //biblioteca Immer está mantendo a imatubilidade
        },
        incrementAmount: (state, action : PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const {increment, incrementAmount} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;