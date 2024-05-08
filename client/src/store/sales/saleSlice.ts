import { createSlice } from "@reduxjs/toolkit";
import { Sale } from "../../types/types";
import { approveSale, declineSale, getSales, getUnapprovedSales } from "./saleThunks";

interface SaleState {
    sales: Sale[],
    unapprovedSales: Sale[],
    approved: boolean,
    declined: boolean,
}

const initialState: SaleState = {
    sales: [],
    unapprovedSales: [],
    approved: false,
    declined: false,
}

const saleSlice = createSlice({
    name: 'sale',
    initialState,
    reducers: {
        resetState(state: SaleState) {
            state.approved = false;
            state.declined = false;
        }
    },
    extraReducers: builder => {
        builder.addCase(getSales.fulfilled, (state: SaleState, action: any) => {
            state.sales = action.payload;
        }).addCase(getUnapprovedSales.fulfilled, (state: SaleState, action: any) => {
            state.unapprovedSales = action.payload;
        }).addCase(approveSale.pending, (state: SaleState) => {
            state.approved = false;
            state.declined = false;
        }).addCase(approveSale.fulfilled, (state: SaleState) => {
            state.approved = true;
            state.declined = false;
        }).addCase(declineSale.pending, (state: SaleState) => {
            state.approved = false;
            state.declined = false;
        }).addCase(declineSale.fulfilled, (state: SaleState) => {
            state.approved = false;
            state.declined = true;
        })
    }
});

export const { resetState } = saleSlice.actions;
export default saleSlice.reducer;