import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getMeetings = createAsyncThunk(
    'getMeetings',
    async (agentid: string | null, { rejectWithValue }) => {
        let response;

        if(agentid) {
            response = await createAPI(`meetings?agentid=${agentid}`, {})(null);
        }
        else {
            response = await createAPI("meetings",{})(null);
        }
        const data = await response.json();
        return response.ok ? data : rejectWithValue("Error occured");
    }
)


export const deleteMeeting = createAsyncThunk(
    'deleteMeeting',
    async(meeting_id: string, { rejectWithValue }) => {
        console.log(meeting_id);
        let response = await createAPI("meetings", {method: 'DELETE'})(meeting_id);
        console.log(response);
        return response.ok ? true : rejectWithValue("Error occured");
    }
)