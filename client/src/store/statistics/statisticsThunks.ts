import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getCalls = createAsyncThunk(
    'getCalls',
    async(_, { rejectWithValue }) => {
        try {
            const response = await createAPI("calls", {})(null);
            const data = await response.json();
            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            rejectWithValue(error);
        }
    }
);