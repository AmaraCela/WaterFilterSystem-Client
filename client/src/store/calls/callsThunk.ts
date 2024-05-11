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
            for (let clientId of inputs.clients) {
                const response = await createAPI('calls', { method: 'POST' })({ clientId, phoneOperatorId: inputs.phoneOperatorId, scheduledTime: inputs.scheduledTime });
                const data = await response.json();
                let errorMessage;
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
                const clientArr = inputs.clientObjects.filter((cl) => (inputs.clients.includes(cl.id)));
                for (let client of clientArr) {
                    client = { ...client, assignedOperator: inputs.phoneOperatorId };
                    if (!client.referredBy) {
                        delete (client.referredBy);
                    }
                    !client.referredInSale && delete (client.referredInSale)
                    dispatch(editClient(client));
                }


                return response.ok ? true : rejectWithValue(errorMessage);
            }

        }
        catch (error) {
            return rejectWithValue(error);
        }
    }
)