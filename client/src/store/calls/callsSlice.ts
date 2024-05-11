import { createSlice } from "@reduxjs/toolkit";
import { addCalls } from "./callsThunk";

interface CallState {
    addSuccessful: boolean;
    addError: string | null;
}

const initialState: CallState = {
    addSuccessful: false,
    addError: null,
}

const callSlice = createSlice({
    name: 'calls',
    initialState,
    reducers: {
        resetState: (state: CallState) => {
            state.addSuccessful = false;
            state.addError = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(addCalls.fulfilled, (state: CallState) => {
            state.addSuccessful = true;
            state.addError = null;
        }).addCase(addCalls.pending, (state: CallState) => {
            state.addSuccessful = false;
            state.addError = null;
        }).addCase(addCalls.rejected, (state: CallState, action: any) => {
            state.addError = action.payload;
            state.addSuccessful = false;
        })
    }
});

export const { resetState } = callSlice.actions;
export default callSlice.reducer;