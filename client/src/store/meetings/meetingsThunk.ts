import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getMeetings = createAsyncThunk(
    'meetingsOfAgent',
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