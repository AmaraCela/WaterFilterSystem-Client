import { createSlice } from "@reduxjs/toolkit";
import { redListClients } from "./clientThunks";
import { Client } from "../../types/types";

interface ClientState {
    clients: Client []
}

const initialState: ClientState = {
    clients: [],
}


const clientSlice = createSlice({
    name: 'client',
    initialState, 
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(redListClients.fulfilled, (state: ClientState, action: any) => {
            state.clients = action.payload;
        })
    }
})

export default clientSlice.reducer;