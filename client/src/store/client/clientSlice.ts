import { createSlice } from "@reduxjs/toolkit";
import { addReferences, allClients, editClient, getClient, redListClients } from "./clientThunks";
import { Client } from "../../types/types";

interface ClientState {
    clients: Client[],
    redlistClients: Client[],
    clientToEdit: Client | null,
    referencesSuccesful: string | null,
    referenceError: string | null,
    phoneNoErrors: { data: string, reference: number }[],
}

const initialState: ClientState = {
    clients: [],
    redlistClients: [],
    clientToEdit: null,
    referencesSuccesful: null,
    referenceError: null,
    phoneNoErrors: [],
}


const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        resetReferences: (state: ClientState) => {
            state.referencesSuccesful = null;
            state.phoneNoErrors = [];
        }
    },
    extraReducers: builder => {
        builder.addCase(redListClients.fulfilled, (state: ClientState, action: any) => {
            state.redlistClients = action.payload;
        }).addCase(allClients.fulfilled, (state: ClientState, action: any) => {
            state.clients = action.payload;
        }).addCase(allClients.rejected, (state: ClientState, action: any) => {

        }).addCase(getClient.fulfilled, (state: ClientState, action: any) => {
            state.clientToEdit = action.payload;
        }).addCase(editClient.fulfilled, (state: ClientState, action: any) => {
            state.clientToEdit = action.payload;
        }).addCase(addReferences.pending, (state: ClientState) => {
            state.referencesSuccesful = null;
            state.phoneNoErrors = [];
        }).addCase(addReferences.fulfilled, (state: ClientState, action: any) => {
            state.referencesSuccesful = action.payload;
        }).addCase(addReferences.rejected, (state: ClientState, action: any) => {
            for (let error of action.payload) {
                if (error.data.errors.phoneNo) {
                    if (error.data.errors.phoneNo.includes('unique')) {
                        state.phoneNoErrors && state.phoneNoErrors.push({ data: 'Phone number is already entered.', reference: error.reference });
                    }
                    else {
                        state.phoneNoErrors && state.phoneNoErrors.push({ data: 'Phone number format is incorrect.', reference: error.reference });
                    }

                }
            }

        })
    }
})

export const { resetReferences } = clientSlice.actions;
export default clientSlice.reducer;