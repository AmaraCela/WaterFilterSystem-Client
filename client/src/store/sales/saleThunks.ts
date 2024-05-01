import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getSales = createAsyncThunk(
    'getSales',
    async (agentid: string | null, { rejectWithValue }) => {
        let response;

        if (agentid) {
            response = await createAPI(`sales?agentid=${agentid}`, {})(null);
        }
        else {
            response = await createAPI("sales", {})(null);
        }
        const data = await response.json();

        return response.ok ? data : rejectWithValue("Error occured");
    }
)

export const getUnapprovedSales = createAsyncThunk(
    'getUnapprovedSales',
    async (_, { rejectWithValue }) => {
        try {
            const response = await createAPI(`sales?unapproved=true`, {})(null);
            const data = await response.json();
            return response.ok ? data : rejectWithValue("Error occurred");

        }
        catch (error) {
            return rejectWithValue(error);
        }  
    }
)