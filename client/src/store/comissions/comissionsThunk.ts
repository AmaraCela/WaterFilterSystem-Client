import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";

export const getUnapprovedCommissions = createAsyncThunk(
    'getUnapprovedCommissions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await createAPI('commissions?unapproved=true', {})(null);
            const data = await response.json();;

            return response.ok ? data : rejectWithValue("Error occured");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const approveCommission = createAsyncThunk(
    'approveCommission',
    async(commissionId: number, {rejectWithValue}) => {
        try {
            const response = await createAPI(`commissions/${commissionId}/approval`, {method: 'POST'})(null);
            return response.ok ? 'Approved Successfully' : rejectWithValue('Error approving commission');
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const declineCommission = createAsyncThunk(
    'declineCommission',
    async(commissionId: number, {rejectWithValue}) => {
        try {
            const response = await createAPI(`commissions/${commissionId}`, {method:'DELETE'})(null);
            return response.ok ? 'Declined successfully' : rejectWithValue("Error rejecting commission");
        }
        catch(error) {
            return rejectWithValue(error);
        }
    }
)