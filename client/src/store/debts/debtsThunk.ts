import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getDebts = createAsyncThunk(
    'getDebts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await createAPI('debts', {})(null);
            const data = await response.json();
            return response.ok ? data : rejectWithValue("Error occured when retrieving debts");
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)