import { createSlice } from "@reduxjs/toolkit";
import { redListClients } from "./clientThunks";

interface Client {
    id: number;
    name?: string;
    surname?: string;
    phoneNo: string;
    profession?: string;
    address?: string;
    status: "IN_WAITLIST" | "IN_REDLIST";
    nextContactDate?: string;
}

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