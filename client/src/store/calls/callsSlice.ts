import { createSlice } from "@reduxjs/toolkit";
import { addCall, addCalls, getReservedCalls } from "./callsThunk";
import { Call } from "../../types/types";

interface CallState {
    addSuccessful: boolean;
    addError: string | null;
    reservedCalls: Call[];
    addCallSuccessful: boolean;
}

const initialState: CallState = {
    addSuccessful: false,
    addError: null,
    reservedCalls: [],
    addCallSuccessful: false,
}

const callSlice = createSlice({
    name: 'calls',
    initialState,
    reducers: {
        resetState: (state: CallState) => {
            state.addSuccessful = false;
            state.addError = null;
            state.addCallSuccessful = false;
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
        }).addCase(getReservedCalls.fulfilled, (state: CallState, action: any) => {
            state.reservedCalls = action.payload;
        }).addCase(addCall.fulfilled, (state: CallState, action: any) => {
            console.log('Fulfilled');
            state.addCallSuccessful = true;
        }).addCase(addCall.rejected, (state: CallState, action: any) => {
            console.log(action.payload);
            console.log('Rejected');
            state.addCallSuccessful = false;
        }).addCase(addCall.pending, (state: CallState) => {
            state.addCallSuccessful = false;
        })
    }
});

export const { resetState } = callSlice.actions;
export default callSlice.reducer;