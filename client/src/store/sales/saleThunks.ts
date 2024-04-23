import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getSales = createAsyncThunk(
    'getSales',
    async (agentid: string | null, { rejectWithValue }) => {
        let response;

        if(agentid) {
            response = await createAPI(`sales?agentid=${agentid}`, {})(null);
        }
        else {
            response = await createAPI("sales", {})(null);
        }
        const data = await response.json();

        return response.ok ? data : rejectWithValue("Error occured");
    }
)