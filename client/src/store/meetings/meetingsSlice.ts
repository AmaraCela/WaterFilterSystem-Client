import { createSlice } from "@reduxjs/toolkit";
import { Meeting } from "../../types/types";
import { getMeetings } from "./meetingsThunk";

interface MeetingState {
    meetings: Meeting []
}

const initialState: MeetingState = {
    meetings: [],
}

const meetingsSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMeetings.fulfilled, (state: MeetingState, action: any) => {
            state.meetings = action.payload;
        })
    }
})

export default meetingsSlice.reducer;