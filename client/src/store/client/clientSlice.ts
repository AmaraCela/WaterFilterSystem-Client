import { createSlice } from "@reduxjs/toolkit";
import { allClients, getClient, redListClients } from "./clientThunks";
import { Client } from "../../types/types";

interface ClientState {
    clients: Client [],
    redlistClients: Client [],
    clientToEdit: Client | null,
}

const initialState: ClientState = {
    clients: [],
    redlistClients: [],
    clientToEdit: null,
}


const clientSlice = createSlice({
    name: 'client',
    initialState, 
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(redListClients.fulfilled, (state: ClientState, action: any) => {
            state.redlistClients = action.payload;
        }).addCase(allClients.fulfilled, (state: ClientState, action: any) => {
            state.clients = action.payload;
        }).addCase(allClients.rejected, (state: ClientState, action: any) => {
            console.log('rejectedddddddddd');
        }).addCase(getClient.fulfilled, (state: ClientState, action: any) => {
            state.clientToEdit = action.payload;
        }) 
    }
})

export default clientSlice.reducer;