import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getPhoneOperators = createAsyncThunk(
    'getPhoneOperators',
    async (_, { rejectWithValue }) => {
        try {
            const response = await createAPI('users/phoneoperators', {})(null);
            const data = await response.json();
            return response.ok ? data : rejectWithValue('Could not fetch the operators');
            
        }
        catch (error) {
            return rejectWithValue(error);
        }  
    }
)