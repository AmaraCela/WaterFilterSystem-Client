import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";
import { Meeting } from "../../types/types";

export const getMeetings = createAsyncThunk(
    'getMeetings',
    async (agentid: string | null, { rejectWithValue }) => {
        console.log(agentid);
        let response;

        if (agentid) {
            response = await createAPI(`meetings?agentid=${agentid}`, {})(null);
        }
        else {
            response = await createAPI("meetings", {})(null);
        }
        const data = await response.json();
        return response.ok ? data : rejectWithValue("Error occured");
    }
)


export const deleteMeeting = createAsyncThunk(
    'deleteMeeting',
    async (meeting_id: string, { rejectWithValue }) => {
        let response = await createAPI("meetings", { method: 'DELETE' })(meeting_id);
        return response.ok ? true : rejectWithValue("Error occured");
    }
)

export const updateMeeting = createAsyncThunk(
    'updateMeeting',
    async (meeting: Meeting, { rejectWithValue }) => {
        try {
            let response = await createAPI(`meetings/${meeting.meeting_id}`, { method: 'PUT' })(meeting);
            const data = await response.json();
            console.log(data);
            return response.ok ? true : rejectWithValue(data);
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)