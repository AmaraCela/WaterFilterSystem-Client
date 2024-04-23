import { createSlice } from "@reduxjs/toolkit";
import { Sale } from "../../types/types";
import { getSales } from "./saleThunks";

interface SaleState {
    sales: Sale []
}

const initialState: SaleState = {
    sales: [],
}

const saleSlice = createSlice({
    name: 'sale',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSales.fulfilled, (state: SaleState, action: any) => {
            state.sales = action.payload;
        })
    }
});

export default saleSlice.reducer;