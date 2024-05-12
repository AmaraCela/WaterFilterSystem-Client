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

export const approveSale = createAsyncThunk(
    'approveSale',
    async (saleId: number, { rejectWithValue }) => {
        console.log(saleId);
        try {
            const response = await createAPI(`sales/${saleId}/approval`, {method: 'POST'})(null);
            return response.ok ? 'Approved' : rejectWithValue("Error occurred approving the sale");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const declineSale = createAsyncThunk(
    'declineSale',
    async (saleId: number, { rejectWithValue }) => {
        try {
            const response = await createAPI(`sales/${saleId}/rejection`, {method: 'POST'})(null);
            return response.ok ? 'Declined' : rejectWithValue("Error occurred approving the sale");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

