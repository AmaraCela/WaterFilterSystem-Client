import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const redListClients = createAsyncThunk(
    'redListClients',
    async (_, { rejectWithValue }) => {
        try {
            const response = await createAPI("clients?status=IN_REDLIST", {})(null);
            const data = await response.json();
            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            rejectWithValue(error);
        }
    }
)