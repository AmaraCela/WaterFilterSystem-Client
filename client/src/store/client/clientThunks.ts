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
            return rejectWithValue(error);
        }
    }
)

export const allClients = createAsyncThunk(
    'allClients',
    async (searchValue : string | null, { rejectWithValue }) => {
        try {
            let response;
            if(searchValue) {
                response = await createAPI(`clients?search=${searchValue}`, {})(null);
            }
            else {
                response = await createAPI("clients", {})(null);
            }
            const data = await response.json();
            return response.ok ? data : rejectWithValue("Error occured")
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const getClient = createAsyncThunk(
    'getClient', 
    async(id: string, { rejectWithValue }) => {
        try {
            let response = await createAPI(`clients/${id}`, {})(null);
            let data = await response.json();

            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)