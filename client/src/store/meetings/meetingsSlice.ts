import { createSlice } from "@reduxjs/toolkit";
import { Meeting } from "../../types/types";
import { deleteMeeting, getMeetings } from "./meetingsThunk";

interface MeetingState {
    meetings: Meeting []
    deleteSuccesful: boolean
}

const initialState: MeetingState = {
    meetings: [],
    deleteSuccesful: false
}

const meetingsSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMeetings.fulfilled, (state: MeetingState, action: any) => {
            state.meetings = action.payload;
        }).addCase(deleteMeeting.fulfilled, (state: MeetingState) => {
            state.deleteSuccesful = true;
        })
    }
})

export default meetingsSlice.reducer;