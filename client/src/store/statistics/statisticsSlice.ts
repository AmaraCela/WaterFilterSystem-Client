import { createSlice } from "@reduxjs/toolkit";
import { Call } from "../../types/types";
import { getCalls } from "./statisticsThunks";

interface CallState {
    calls: Call []
}

const initialState: CallState = {
    calls: [],
}

const callSlice = createSlice({
    name: 'call',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getCalls.fulfilled, (state: CallState, action: any) => {
            state.calls = action.payload;
        })
    }
})

export default callSlice.reducer;