import { createSlice } from "@reduxjs/toolkit";
import { Meeting } from "../../types/types";
import { deleteMeeting, getMeetings, updateMeeting } from "./meetingsThunk";

interface MeetingState {
    meetings: Meeting[],
    deleteSuccesful: boolean,
    updateSuccessful: boolean,
}

const initialState: MeetingState = {
    meetings: [],
    deleteSuccesful: false,
    updateSuccessful: false,

}

const meetingsSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {
        resetUpdate: (state: MeetingState) => {
            state.updateSuccessful = false
        }
    },
    extraReducers: builder => {
        builder.addCase(getMeetings.fulfilled, (state: MeetingState, action: any) => {
            state.meetings = action.payload;
        }).addCase(deleteMeeting.fulfilled, (state: MeetingState) => {
            state.deleteSuccesful = true;
        }).addCase(updateMeeting.fulfilled, (state: MeetingState) => {
            state.updateSuccessful = true;
        })
    }
})

export const {resetUpdate} = meetingsSlice.actions;
export default meetingsSlice.reducer;