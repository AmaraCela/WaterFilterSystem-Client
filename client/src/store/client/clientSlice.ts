import { createSlice } from "@reduxjs/toolkit";
import { addReferences, allClients, editClient, getClient, redListClients } from "./clientThunks";
import { Client } from "../../types/types";

interface ClientState {
    clients: Client[],
    redlistClients: Client[],
    clientToEdit: Client | null,
    referencesSuccesful: string | null,
    referenceError: string | null,
    phoneNoError: string | null,
}

const initialState: ClientState = {
    clients: [],
    redlistClients: [],
    clientToEdit: null,
    referencesSuccesful: null,
    referenceError: null,
    phoneNoError: null,
}


const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        resetReferences: (state: ClientState) => {
            state.referencesSuccesful = null;
            state.phoneNoError = null;
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
        }).addCase(addReferences.fulfilled, (state: ClientState, action: any) => {
            state.referencesSuccesful = action.payload;
        }).addCase(addReferences.rejected, (state: ClientState, action: any) => {
            console.log(action.payload);
            if (action.payload.errors.phoneNo) {
                state.phoneNoError = "The phone number is either invalid or taken."
            }
        })
    }
})

export const { resetReferences } = clientSlice.actions;
export default clientSlice.reducer;