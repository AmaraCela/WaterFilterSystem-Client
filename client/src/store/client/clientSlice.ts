import { createSlice } from "@reduxjs/toolkit";
import { allClients, redListClients } from "./clientThunks";
import { Client } from "../../types/types";

interface ClientState {
    clients: Client [],
    redlistClients: Client [],
}

const initialState: ClientState = {
    clients: [],
    redlistClients: [],
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
        })
    }
})

export default clientSlice.reducer;