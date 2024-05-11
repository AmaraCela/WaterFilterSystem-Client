import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const addCalls = createAsyncThunk(
    'addCalls',
    async (inputs: {
        clients: number[],
        phoneOperatorId: number,
        scheduledTime: string;
    }, { rejectWithValue }) => {
        try {
            for (let clientId of inputs.clients) {
                const response = await createAPI('calls', { method: 'POST' })({ clientId, phoneOperatorId: inputs.phoneOperatorId, scheduledTime: inputs.scheduledTime });
                return response.ok ? true : rejectWithValue("There was an error adding calls.");
            }
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)