import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../../utils/api";
import { Client } from "../../types/types";
import { editClient } from "../client/clientThunks";

export const addCalls = createAsyncThunk(
    'addCalls',
    async (inputs: {
        clientObjects: Client[],
        clients: number[],
        phoneOperatorId: number,
        scheduledTime: string;
    }, { rejectWithValue, dispatch }) => {
        try {
            let done = true;
            let errorMessage;
            for (let clientId of inputs.clients) {
                const response = await createAPI('calls', { method: 'POST' })({ clientId, phoneOperatorId: inputs.phoneOperatorId, scheduledTime: inputs.scheduledTime });
                const data = await response.json();
                if (data.errors) {
                    if (data.errors.scheduledTime) {
                        errorMessage = 'Enter a valid scheduled time.'
                    }
                    else if (data.errors.phoneOperatorId) {
                        errorMessage = 'Select 1 phone operator.'
                    }
                    else {
                        errorMessage = 'An error occurred'
                    }
                }
                if (!response.ok && data.message?.includes('Phone operator not found')) {
                    errorMessage = 'Select 1 phone operator.';
                }
                if (errorMessage) {
                    done = false;
                    break;
                }
                done = response.ok && done;

            }
            if (done) {
                const clientArr = inputs.clientObjects.filter((cl) => (inputs.clients.includes(cl.id)));
                for (let client of clientArr) {
                    client = { ...client, assignedOperator: inputs.phoneOperatorId };
                    if (!client.referredBy) {
                        delete (client.referredBy);
                    }
                    !client.referredInSale && delete (client.referredInSale)
                    await dispatch(editClient(client));
                }
            }

            return done ? true : rejectWithValue(errorMessage);

        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getReservedCalls = createAsyncThunk(
    'getReservedCalls',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await createAPI(`calls/${id}/reserved`, { method: 'GET' })(null);
            const reservedCalls = await response.json();
            return response.ok ? reservedCalls : rejectWithValue("Could not retrieve reserved calls");
        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const addCall = createAsyncThunk(
    'addCall',
    async (inputs: {
        scheduledTime: Date | null;
        clientId: number;
        phoneOperatorId: number;
    }, { rejectWithValue }) => {
        console.log(inputs);
        try {
            const response = await createAPI('calls', {method: 'POST'})(inputs);
            const data = await response.json();
            console.log(data);
            return response.ok ? true: rejectWithValue(data);
        }
        catch (error) {
            console.log(error);
            return rejectWithValue(error);
        }
    }
)
