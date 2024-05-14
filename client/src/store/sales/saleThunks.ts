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
            const response = await createAPI(`sales/${saleId}/approval`, { method: 'POST' })(null);
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
            const response = await createAPI(`sales/${saleId}/rejection`, { method: 'POST' })(null);
            return response.ok ? 'Declined' : rejectWithValue("Error occurred approving the sale");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addSale = createAsyncThunk(
    'addSale',
    async (saleInfo: { clientId: number, salesAgentId: number, phoneOperatorId: number, price: number, monthlyPayment: number }, { rejectWithValue }) => {
        try {
            const today = new Date();
            const day = today.getDate();
            const month = today.getMonth();
            const year = today.getFullYear();

            const warrantyExpiration = new Date(year + 5, month, day);
            const renewalDate = new Date(year + 1, month, day);

            const body = {
                clientId: saleInfo.clientId,
                salesAgentId: saleInfo.salesAgentId,
                phoneOperatorId: saleInfo.phoneOperatorId,
                price: saleInfo.price,
                warrantyExpiration,
                renewalDate,
                monthlyPayment: saleInfo.monthlyPayment === 0 ? false : true,
                time: new Date()
            }

            const response = await createAPI('sales', {method: 'POST'})(body);
            const data = await response.json();
            console.log(data);
            return response.ok ? data : rejectWithValue(data);
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)