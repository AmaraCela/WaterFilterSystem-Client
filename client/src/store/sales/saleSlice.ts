import { createSlice } from "@reduxjs/toolkit";
import { Sale } from "../../types/types";
import { getSales, getUnapprovedSales } from "./saleThunks";

interface SaleState {
    sales: Sale [],
    unapprovedSales: Sale [],
}

const initialState: SaleState = {
    sales: [],
    unapprovedSales: [],
}

const saleSlice = createSlice({
    name: 'sale',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSales.fulfilled, (state: SaleState, action: any) => {
            state.sales = action.payload;
        }).addCase(getUnapprovedSales.fulfilled, (state: SaleState, action: any) => {
            state.unapprovedSales = action.payload;
        })
    }
});

export default saleSlice.reducer;