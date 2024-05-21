import { createSlice } from "@reduxjs/toolkit";
import { addReferences, addToRedlist, allClients, editClient, getClient, getLatestReferences, getReferences, redListClients } from "./clientThunks";
import { Client } from "../../types/types";

interface ClientState {
    clients: Client[],
    redlistClients: Client[],
    references: Client[],
    latestReferences: Client[],
    clientToEdit: Client | null,
    referencesSuccesful: string | null,
    referenceError: string | null,
    phoneNoErrors: { data: string, reference: number }[],
    addRedlistSuccessful: boolean,
}

const initialState: ClientState = {
    clients: [],
    redlistClients: [],
    references: [],
    latestReferences: [],
    clientToEdit: null,
    referencesSuccesful: null,
    referenceError: null,
    phoneNoErrors: [],
    addRedlistSuccessful: false,
}

const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        resetReferences: (state: ClientState) => {
            state.referencesSuccesful = null;
            state.phoneNoErrors = [];
            state.clientToEdit = null;

        },
        resetAddRedlist: (state: ClientState) => {
            state.addRedlistSuccessful = false;
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
        }).addCase(editClient.rejected, () => {
            console.log('REJECTED');
        }).addCase(editClient.pending, (state: ClientState) => {
            state.clientToEdit = null;
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

        }).addCase(getReferences.fulfilled, (state: ClientState, action: any) => {
            state.references = action.payload;
            state.addRedlistSuccessful = false;
        }).addCase(getReferences.pending, (state: ClientState) => {
            state.references = [];
        }).addCase(addToRedlist.fulfilled, (state: ClientState) => {
            console.log('here');
            state.addRedlistSuccessful = true;
        }).addCase(addToRedlist.pending, (state: ClientState) => {
            state.addRedlistSuccessful = false;
        }).addCase(addToRedlist.rejected, (state: ClientState) => {
            state.addRedlistSuccessful = false;
        }).addCase(getLatestReferences.pending, (state: ClientState) => {
            state.latestReferences = [];
        }).addCase(getLatestReferences.fulfilled, (state: ClientState, action: any) => {
            state.latestReferences = action.payload;
        })
    }
})

export const { resetReferences, resetAddRedlist } = clientSlice.actions;
export default clientSlice.reducer;