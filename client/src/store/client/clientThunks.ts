import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const redListClients = createAsyncThunk(
    'redListClients',
    async (_, { rejectWithValue }) => {
        try {
            const response = await createAPI("clients/clients", {})(null);
            const data = await response.json();
            console.log(data);
            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            rejectWithValue(error);
        }
    }
)